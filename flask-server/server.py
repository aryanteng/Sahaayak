from flask import Flask,request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

#Functions
#------------------------------------------------------------------------------------------------------------------

#Global Alignment
def globalAlignment(seq_1, seq_2, match, mismatch, gap):
    rows = len(seq_1)+1
    cols = len(seq_2)+1
    arr = []

    # forming the arr and filling it with 0s
    for r in range(0, rows):
            arr.append([0 for c in range(0, cols)])

    # adding the gap penalties in the first row and column
    for i in range(1, len(seq_1)+1):
        arr[i][0] = arr[i - 1][0] + gap
    for i in range(1, len(seq_2)+1):
        arr[0][i] = arr[0][i-1] + gap

    # traversing the array looking for matches and adding the score to the element accordingly
    for i in range(1, len(seq_1)+1):
        for j in range(1, len(seq_2)+1):
            if seq_1[i - 1] == seq_2[j - 1]:
                diagonalScore = arr[i - 1][j - 1] + match
                arr[i][j] = diagonalScore
            else:
                diagonalScore = arr[i - 1][j - 1] + mismatch
                leftScore = arr[i][j - 1] + gap
                upScore = arr[i - 1][j] + gap
                arr[i][j] = max(diagonalScore, leftScore, upScore)
    
    optimal= []
    # now we create a function for finding all optimal alignments
    def optAlignment(stringLeft, stringUp, arr, i, j):
        optimalArr = []
        if i == 1 and j == 1:
            stringUp += seq_2[j-1]
            stringLeft += seq_2[j-1]
            if '-' in stringUp:
                optimal.append(stringUp[::-1])
            if '-' in stringLeft:
                optimal.append(stringLeft[::-1])
                
        # value of element at row i and column j
        element = arr[i][j]
        
        # the score of gap penalty
        gap_penalty = element - gap
        
        if seq_2[j-1] == seq_1[i-1]:
            optAlignment(stringLeft+seq_2[j-1], stringUp+seq_1[i-1], arr, i-1, j-1)
            if gap_penalty == arr[i-1][j]:
                stringUp += '-'
                optAlignment(stringLeft, stringUp, arr, i-1, j)
            
            if gap_penalty == arr[i][j-1]:
                stringLeft += '-'
                optAlignment(stringLeft, stringUp, arr, i, j-1) 
            
        else:
            if gap_penalty == arr[i-1][j]:
                stringUp += '-'
                optAlignment(stringLeft, stringUp, arr, i-1, j)
                
            if gap_penalty == arr[i][j-1]:
                stringLeft += '-'
                optAlignment(stringLeft, stringUp, arr, i, j-1) 
    optAlignment('', '', arr, rows-1, cols-1)
    original = []
    for i in range(0, len(optimal)):
        if(len(seq_1) > len(seq_2)):
            original.append(seq_1)
        else:
            original.append(seq_2)
    return arr, original, optimal

#LOCAL ALIGNMNET
#------------------------------------------------------------------------------------------------------------------

scorelist=[]
seq1List=[]
seq2List=[]

def generateArray():
    cols,rows = len(sequence1)+1,len(sequence2)+1
    arr = [[0 for i in range(cols)] for j in range(rows)]
    for i in range(1, len(sequence2)+1):
        for j in range(1, len(sequence1)+1):
            if (sequence2[i-1] != sequence1[j-1]):
                arr[i][j] = max(arr[i][j-1]+gapScore, arr[i-1][j]+gapScore, arr[i-1][j-1]+mismatchScore,0)
            else:
                arr[i][j] = max(arr[i][j-1]+gapScore, arr[i-1][j]+gapScore, arr[i-1][j-1]+matchScore,0)
    return arr

def optimalSequence(solSeq1, solSeq2, x, y,score):
    if (arr[x][y]==0):
        seq1List.append(solSeq1);seq2List.append(solSeq2);scorelist.append(score)
        return
    if (x <0 or y < 0):
        seq1List.append(solSeq1);seq2List.append(solSeq2);scorelist.append(score)
        return 
    if (x == 0 and y == 0):
        seq1List.append(solSeq1);seq2List.append(solSeq2);scorelist.append(score)
        return 
    elif(x==0):
        optimalSequence(sequence1[y-1]+solSeq1 ,"-"+solSeq2 , x, y-1,score+gapScore)
        return
    elif(y==0):
        optimalSequence("-"+solSeq1, sequence2[x-1]+solSeq2, x-1, y,score+gapScore)
        return
    fromLeft = arr[x][y-1]
    fromUp = arr[x-1][y]
    ifFromGap=arr[x][y]- gapScore
    
    if (sequence2[x-1] == sequence1[y-1]):
        optimalSequence(sequence1[y-1]+solSeq1, sequence2[x-1]+solSeq2, x-1, y-1, score+matchScore)
    else:
        optimalSequence(sequence1[y-1]+solSeq1, sequence2[x-1]+solSeq2, x-1, y-1, score+mismatchScore)
    if (ifFromGap == fromUp):
        optimalSequence("-"+solSeq1, sequence2[x-1]+solSeq2, x-1, y, score+gapScore)
    if (ifFromGap == fromLeft):
        optimalSequence(sequence1[y-1]+solSeq1, "-"+solSeq2, x, y-1, score+gapScore)


def localAlignment(seq1, seq2, matchscore, mismatchscore, gapscore):
    global arr, sequence1, sequence2, matchScore, mismatchScore, gapScore
    sequence1  = seq1
    sequence2 = seq2
    matchScore = matchscore
    mismatchScore = mismatchscore
    gapScore = gapscore
    arr = generateArray()
    x,y,maxElement=0,0,0
    for i in range(1, len(sequence2) + 1):
        for j in range(1, len(sequence1) + 1):
            if(arr[i][j]>maxElement):
                maxElement= arr[i][j]
                x=i
                y=j
    optimalSequence("", "", x, y,0) 
    bestScoreSol =[]
    maxScore=-1
    for i in range(len(scorelist)):
        if(maxScore<scorelist[i]):
            maxScore=scorelist[i]
    for i in range(len(scorelist)):
        if(maxScore==scorelist[i]):
            bestScoreSol.append(i)
    return arr, seq1List, seq2List, scoreList



#------------------------------------------------------------------------------------------------------------------
#Orfs

def convertTomRna(dna):
    mrna = ""
    for i in range(len(dna)):
        if dna[i] == 'A':
            mrna += 'U'
        elif dna[i] == 'T':
            mrna += 'A'
        elif dna[i] == 'G':
            mrna += 'C'
        elif dna[i] == 'C':
            mrna += 'G'
    return mrna


def findORF(mrna):
    orfs = []
    startCodons = []
    stopcodons = []

    i = 0
    if "AUG" in mrna:
        while i < len(mrna) - 2:
            if mrna[i:(i + 3)] == "AUG":
                startCodons.append(i)
            if mrna[i:(i + 3)] == "UAG" or mrna[i:(i + 3)] == "UGA" or mrna[i:(i + 3)] == "UAA":
                stopcodons.append(i)
            i += 3
    for i in startCodons:
        for j in stopcodons:
            if i < j:
                orfs.append(mrna[i:j + 1])
                break
    return orfs


def ORFS(DNA):
    dna = DNA
    mrna = convertTomRna(dna)
    reversemrna = mrna[::-1]
    orfs1 = findORF(mrna)
    orfs2 = findORF(mrna[1:])
    orfs3 = findORF(mrna[2:])
    orfs4 = findORF(reversemrna)
    orfs5 = findORF(reversemrna[1:])
    orfs6 = findORF(reversemrna[2:])
    return orfs1, orfs2, orfs3, orfs4, orfs5, orfs6


#------------------------------------------------------------------------------------------------------------------
#Protein


def getProtein(dna):
    mrna = convertTomRna(dna)
    reversedMrna = mrna[::-1]
    proteinFrame1,proteinFrame2 = calculateProtein(0,mrna,reversedMrna)
    proteinFrame3, proteinFrame4 = calculateProtein(1, mrna, reversedMrna)
    proteinFrame5, proteinFrame6 = calculateProtein(2, mrna, reversedMrna)
    return proteinFrame1, proteinFrame2, proteinFrame3, proteinFrame4, proteinFrame5, proteinFrame6


def calculateProtein(i, mrna, reversedMrna):
    dicti = {
        "Ala": ["GCU", "GCA", "GCG", "GCC"],
        "Arg": ["AGA", "AGG", "CGU", "CGA", "CGG", "CGC"],
        "Asn": ["AAU", "AAC"],
        "Asp": ["GAU", "GAC"],
        "Cys": ["UGU", "UGC"],
        "Glu": ["GAA", "GAG"],
        "Gln": ["CAA", "CAG"],
        "Gly": ["GGU", "GGA", "GGG", "GGC"],
        "His": ["CAU", "CAC"],
        "Ile": ["AUU", "AUC", "AUA"],
        "Leu": ["UUA", "UUG"],
        "Lys": ["AAA", "AAG"],
        "Met": ["AUG"],
        "Phe": ["UUU", "UUC"],
        "Pro": ["CCU", "CCA", "CCC", "CCG"],
        "Ser": ["UCA", "UCU", "UCC", "UCG"],
        "Thr": ["ACA", "ACU", "ACG", "ACC"],
        "Trp": ["UGG"],
        "Tyr": ["UAU", "UAC"],
        "Val": ["GUA", "GUU", "GUC", "GUG"],
        "-": ["UGA", "UAA", "UAG"]
    }
    p1 = ""
    p2 = ""
    while i < len(mrna) - 2:
        for key in dicti:
            if mrna[i:i + 3] in dicti[key]:
                p1 += key
            if reversedMrna[i:i + 3] in dicti[key]:
                p2 += key
    return p1, p2




#------------------------------------------------------------------------------------------------------------------
# API ROUTE
@app.route('/members/', methods=['POST'])
def members():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        print("members",json)
        return json

    return {"error": "Unable to retreive data at this moment"}

#ROUTE FOR GLOBAL
@app.route('/global/', methods=['POST'])
def globalAlignmentRoute():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        print("global Data",json)
        ans = globalAlignment(json['seqA'], json['seqB'], int(json['match']), int(json['misMatch']),int(json['gap']))
        return {"body":ans}

    return {"error": "Unable to retreive data at this moment"}

#ROUTE FOR LOCAL
@app.route('/local/', methods=['POST'])
def localAlignmentRoute():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        print("local Data",json)
        ans = localAlignment(json['seqA'], json['seqB'], int(json['match']), int(json['misMatch']),int(json['gap']))
        return json

    return {"error": "Unable to retreive data at this moment"}



#ROUTE FOR DNA-TO-PROTEIN
@app.route('/dna-to-protein/', methods=['POST'])
def dnaToProteinRoute():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        print("dna to protein",json)
        return json
        

    return {"error": "Unable to retreive data at this moment"}


#ROUTE FOR ORFS
@app.route('/orfs/', methods=['POST'])
def OrfsRoute():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        print("orfs",json)
        return json

    return {"error": "Unable to retreive data at this moment"}


if __name__ == "__main__":
    app.run(debug=True)