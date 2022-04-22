import React from "react";

function globalAlignment() {
  var scorelist, seq1List, seq2List;
  scorelist = [];
  seq1List = [];
  seq2List = [];

  function generateArray() {
    var arr, cols, rows, score;
    [cols, rows] = [sequence1.length + 1, sequence2.length + 1];

    score = 0;

    for (var i = 0, _pj_a = rows; i < _pj_a; i += 1) {
      arr[i][0] = score;
    }

    for (var i = 0, _pj_a = cols; i < _pj_a; i += 1) {
      arr[0][i] = score;
      score += gapScore;
    }

    for (var i = 1, _pj_a = sequence2.length + 1; i < _pj_a; i += 1) {
      for (var j = 1, _pj_b = sequence1.length + 1; j < _pj_b; j += 1) {
        if (sequence2[i - 1] !== sequence1[j - 1]) {
          arr[i][j] = max(
            arr[i][j - 1] + gapScore,
            arr[i - 1][j] + gapScore,
            arr[i - 1][j - 1] + mismatchScore
          );
        } else {
          arr[i][j] = max(
            arr[i][j - 1] + gapScore,
            arr[i - 1][j] + gapScore,
            arr[i - 1][j - 1] + matchScore
          );
        }
      }
    }
    return arr;
  }

  function optimalSequence(solSeq1, solSeq2, x, y, score) {
    var fromLeft, fromUp, ifFromGap;
    if (x < 0 || y < 0) {
      seq1List.append(solSeq1);
      seq2List.append(solSeq2);
      scorelist.append(score);
      return;
    }
    if (x === 0 && y === 0) {
      seq1List.append(solSeq1);
      seq2List.append(solSeq2);
      scorelist.append(score);
      return;
    } else if (x === 0) {
      optimalSequence(
        sequence1[y - 1] + solSeq1,
        "-" + solSeq2,
        x,
        y - 1,
        score + gapScore
      );
      return;
    } else if (y === 0) {
      optimalSequence(
        "-" + solSeq1,
        sequence2[x - 1] + solSeq2,
        x - 1,
        y,
        score + gapScore
      );
      return;
    }
    fromLeft = arr[x][y - 1];
    fromUp = arr[x - 1][y];
    ifFromGap = arr[x][y] - gapScore;

    if (sequence2[x - 1] === sequence1[y - 1]) {
      optimalSequence(
        sequence1[y - 1] + solSeq1,
        sequence2[x - 1] + solSeq2,
        x - 1,
        y - 1,
        score + matchScore
      );
    } else {
      optimalSequence(
        sequence1[y - 1] + solSeq1,
        sequence2[x - 1] + solSeq2,
        x - 1,
        y - 1,
        score + mismatchScore
      );
    }
    if (ifFromGap === fromUp) {
      optimalSequence(
        "-" + solSeq1,
        sequence2[x - 1] + solSeq2,
        x - 1,
        y,
        score + gapScore
      );
    }
    if (ifFromGap === fromLeft) {
      optimalSequence(
        sequence1[y - 1] + solSeq1,
        "-" + solSeq2,
        x,
        y - 1,
        score + gapScore
      );
    }
  }

  function globalAlignment(seq1, seq2, matchscore, mismatchscore, gapscore) {
    var arr,
      bestScoreSol,
      gapScore,
      matchScore,
      maxScore,
      mismatchScore,
      sequence1,
      sequence2;
    [arr, sequence1, sequence2, matchScore, mismatchScore, gapScore];
    sequence1 = seq1;
    sequence2 = seq2;
    matchScore = matchscore;
    mismatchScore = mismatchscore;
    gapScore = gapscore;
    arr = generateArray();
    optimalSequence("", "", sequence2.length, sequence1.length, 0);
    bestScoreSol = [];
    maxScore = -1;

    for (var i = 0, _pj_a = scorelist.length; i < _pj_a; i += 1) {
      if (maxScore < scorelist[i]) {
        maxScore = scorelist[i];
      }
    }

    for (var i = 0, _pj_a = scorelist.length; i < _pj_a; i += 1) {
      if (maxScore === scorelist[i]) {
        bestScoreSol.append(i);
      }

      return [arr, seq1List, seq2List, scorelist];
    }
  }

  return <div></div>;
}

export default global;
