export var matA = [0.6, 0.2, 0.2, 0.0, 0.6, 0.4, 0.0, 0.0, 1.0];
export var matB = [0.4, 0.3, 0.3, 0.0, 0.6, 0.4, 0.0, 0.0, 1.0];
export var initVec = [1e7, 0, 0];

export function multiplyMatrixAndPoint(matrix, point) {
  // Give a simple variable name to each part of the matrix, a column and row number
  let c0r0 = matrix[0], c1r0 = matrix[1], c2r0 = matrix[2];
  let c0r1 = matrix[3], c1r1 = matrix[4], c2r1 = matrix[5];
  let c0r2 = matrix[6], c1r2 = matrix[7], c2r2 = matrix[8];

  // Now set some simple names for the point
  let x = point[0];
  let y = point[1];
  let z = point[2];

  // Multiply the point against each part of the 1st column, then add together
  let resultX = x * c0r0 + y * c0r1 + z * c0r2;
  let resultY = x * c1r0 + y * c1r1 + z * c1r2;
  let resultZ = x * c2r0 + y * c2r1 + z * c2r2;
  return [resultX, resultY, resultZ];
}
