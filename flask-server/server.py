from flask import Flask,request
from flask_cors import CORS
import math

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

#Functions
#------------------------------------------------------------------------------------------------------------------

#Global Alignment

def globalAlignment(sequence1, sequence2, matchScore, mismatchScore, gapScore):
    cols, rows = len(sequence1) + 1, len(sequence2) + 1
    scorelist = []
    seq1List = []
    seq2List = []
    arr = [[0 for k in range(cols)] for l in range(rows)]
    score: int = 0
    for i in range(rows):
        arr[i][0] = score
        score += gapScore
    score = 0
    for i in range(cols):
        arr[0][i] = score
        score += gapScore
    for i in range(1, len(sequence2) + 1):
        for j in range(1, len(sequence1) + 1):
            if sequence2[i - 1] != sequence1[j - 1]:
                arr[i][j] = max(arr[i][j - 1] + gapScore, arr[i - 1][j] + gapScore, arr[i - 1][j - 1] + mismatchScore)
            else:
                arr[i][j] = max(arr[i][j - 1] + gapScore, arr[i - 1][j] + gapScore, arr[i - 1][j - 1] + matchScore)

    def optimalSequence(solSeq1, solSeq2, x, y, score):
        if x < 0 or y < 0:
            seq1List.append(solSeq1)
            seq2List.append(solSeq2)
            scorelist.append(score)
            return
        if x == 0 and y == 0:
            seq1List.append(solSeq1)
            seq2List.append(solSeq2)
            scorelist.append(score)
            return
        elif x == 0:
            optimalSequence(sequence1[y - 1] + solSeq1, "-" + solSeq2, x, y - 1, score + gapScore)
            return
        elif y == 0:
            optimalSequence("-" + solSeq1, sequence2[x - 1] + solSeq2, x - 1, y, score + gapScore)
            return
        fromLeft = arr[x][y - 1]
        fromUp = arr[x - 1][y]
        ifFromGap = arr[x][y] - gapScore

        if sequence2[x - 1] == sequence1[y - 1]:
            optimalSequence(sequence1[y - 1] + solSeq1, sequence2[x - 1] + solSeq2, x - 1, y - 1, score + matchScore)
        else:
            optimalSequence(sequence1[y - 1] + solSeq1, sequence2[x - 1] + solSeq2, x - 1, y - 1, score + mismatchScore)
        if ifFromGap == fromUp:
            optimalSequence("-" + solSeq1, sequence2[x - 1] + solSeq2, x - 1, y, score + gapScore)
        if ifFromGap == fromLeft:
            optimalSequence(sequence1[y - 1] + solSeq1, "-" + solSeq2, x, y - 1, score + gapScore)

    optimalSequence("", "", len(sequence2), len(sequence1), 0)
    bestScoreSol = []
    optSeq1 = []
    optSeq2 = []
    maxScore = -math.inf
    for i in range(len(scorelist)):
        if maxScore < scorelist[i]:
            maxScore = scorelist[i]
    for i in range(len(scorelist)):
        if maxScore == scorelist[i]:
            bestScoreSol.append(i)
    for i in bestScoreSol:
        optSeq1.append(seq1List[i])
        optSeq2.append(seq2List[i])

    return arr, optSeq1, optSeq2, maxScore

#LOCAL ALIGNMNET
#------------------------------------------------------------------------------------------------------------------
import math
def localAlignment(sequence1, sequence2, matchScore, mismatchScore, gapScore):
    scorelist = []
    seq1List = []
    seq2List = []
    cols, rows = len(sequence1) + 1, len(sequence2) + 1
    arr = [[0 for i in range(cols)] for j in range(rows)]
    for i in range(1, len(sequence2) + 1):
        for j in range(1, len(sequence1) + 1):
            if (sequence2[i - 1] != sequence1[j - 1]):
                arr[i][j] = max(arr[i][j - 1] + gapScore, arr[i - 1][j] + gapScore, arr[i - 1][j - 1] + mismatchScore,
                                0)
            else:
                arr[i][j] = max(arr[i][j - 1] + gapScore, arr[i - 1][j] + gapScore, arr[i - 1][j - 1] + matchScore, 0)
    maxElement = 0
    x =[]
    y =[]
    for i in range(1, len(sequence2) + 1):
        for j in range(1, len(sequence1) + 1):
            if arr[i][j] >= maxElement:
                maxElement = arr[i][j]
                x.append(i)
                y.append(j)

    def optimalSequence(solSeq1, solSeq2, x, y, score):
        if arr[x][y] == 0:
            seq1List.append(solSeq1)
            seq2List.append(solSeq2)
            scorelist.append(score)
            return
        if x < 0 or y < 0:
            seq1List.append(solSeq1)
            seq2List.append(solSeq2)
            scorelist.append(score)
            return
        if x == 0 and y == 0:
            seq1List.append(solSeq1)
            seq2List.append(solSeq2)
            scorelist.append(score)
            return
        elif x == 0:
            optimalSequence(sequence1[y - 1] + solSeq1, "-" + solSeq2, x, y - 1, score + gapScore)
            return
        elif y == 0:
            optimalSequence("-" + solSeq1, sequence2[x - 1] + solSeq2, x - 1, y, score + gapScore)
            return
        fromLeft = arr[x][y - 1]
        fromUp = arr[x - 1][y]
        ifFromGap = arr[x][y] - gapScore

        if sequence2[x - 1] == sequence1[y - 1]:
            optimalSequence(sequence1[y - 1] + solSeq1, sequence2[x - 1] + solSeq2, x - 1, y - 1, score + matchScore)
        else:
            optimalSequence(sequence1[y - 1] + solSeq1, sequence2[x - 1] + solSeq2, x - 1, y - 1, score + mismatchScore)
        if ifFromGap == fromUp:
            optimalSequence("-" + solSeq1, sequence2[x - 1] + solSeq2, x - 1, y, score + gapScore)
        if ifFromGap == fromLeft:
            optimalSequence(sequence1[y - 1] + solSeq1, "-" + solSeq2, x, y - 1, score + gapScore)

    for i in range(len(x)):
        optimalSequence("", "", x[i], y[i], 0)
    bestScoreSol = []
    maxScore = -math.inf
    optSeq1 = []
    optSeq2 = []
    for i in range(len(scorelist)):
        if maxScore < scorelist[i]:
            maxScore = scorelist[i]
    for i in range(len(scorelist)):
        if maxScore == scorelist[i]:
            bestScoreSol.append(i)
    for i in bestScoreSol:
        optSeq1.append(seq1List[i])
        optSeq2.append(seq2List[i])

    return arr, optSeq1, optSeq2, maxScore
#------------------------------------------------------------------------------------------------------------------
#Orfs
def ORFS(dna, threshold):
    reversedDna = dna[::-1]

    def findORF(seq):
        orfs = []
        startCodons = []
        stopcodons = []
        i = 0
        if "ATG" in seq:
            while i < len(seq) - 2:
                if seq[i:(i + 3)] == "ATG":
                    startCodons.append(i)
                if seq[i:(i + 3)] == "TAG" or seq[i:(i + 3)] == "TGA" or seq[i:(i + 3)] == "TAA":
                    stopcodons.append(i)
                i += 3
        for i in startCodons:
            for j in stopcodons:
                if i < j and len(seq[i:j + 3])>=threshold:
                    orfs.append(seq[i:j + 3])
                    break
        return orfs

    orfs1 = findORF(dna)
    orfs2 = findORF(dna[1:])
    orfs3 = findORF(dna[2:])
    orfs4 = findORF(reversedDna)
    orfs5 = findORF(reversedDna[1:])
    orfs6 = findORF(reversedDna[2:])
    totalCount = len(orfs1) + len(orfs2) + len(orfs3) + len(orfs4) + len(orfs5) + len(orfs6)
    return orfs1, orfs2, orfs3, orfs4, orfs5, orfs6, totalCount
#------------------------------------------------------------------------------------------------------------------
#Protein

def getProtein(dna):
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
    reversedMrna = mrna[::-1]

    def calculateProtein(t):
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
        while t < len(mrna) - 2:
            for key in dicti:
                if mrna[t:t + 3] in dicti[key]:
                    p1 += key
                if reversedMrna[t:t + 3] in dicti[key]:
                    p2 += key
            t += 3
        return p1, p2

    proteinFrame1, proteinFrame2 = calculateProtein(0)
    proteinFrame3, proteinFrame4 = calculateProtein(1)
    proteinFrame5, proteinFrame6 = calculateProtein(2)
    return proteinFrame1, proteinFrame2, proteinFrame3, proteinFrame4, proteinFrame5, proteinFrame6



#------------------------------------------------------------------------------------------------------------------
# API ROUTE
@app.route('/members/', methods=['POST'])
def members():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        return json

    return {"error": "Unable to retreive data at this moment"}

#ROUTE FOR GLOBAL
@app.route('/global/', methods=['POST'])
def globalAlignmentRoute():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        ans = globalAlignment(json['seqA'], json['seqB'], int(json['match']), int(json['misMatch']),int(json['gap']))
        return {"body":ans}

    return {"error": "Unable to retreive data at this moment"}

#ROUTE FOR LOCAL
@app.route('/local/', methods=['POST'])
def localAlignmentRoute():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        ans = localAlignment(json['seqA'], json['seqB'], int(json['match']), int(json['misMatch']),int(json['gap']))
        return {"body":ans}

    return {"error": "Unable to retreive data at this moment"}



#ROUTE FOR DNA-TO-PROTEIN
@app.route('/dna-to-protein/', methods=['POST'])
def dnaToProteinRoute():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        ans = getProtein(json['dna'])
        return {"body":ans}
        

    return {"error": "Unable to retreive data at this moment"}


#ROUTE FOR ORFS
@app.route('/orfs/', methods=['POST'])
def OrfsRoute():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        ans = ORFS(json['dna'], json['minLen'])
        return {"body": ans}

    return {"error": "Unable to retreive data at this moment"}


if __name__ == "__main__":
    app.run(debug=True)