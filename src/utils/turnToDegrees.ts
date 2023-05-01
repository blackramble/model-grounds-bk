export const turnToDegrees = (deg: number): number => {
    const _deg = (Math.PI / 180) * deg;
    return _deg;
};

export const turnToDegreesArr = (x: number, y: number, z: number): any => {
    return [turnToDegrees(x), turnToDegrees(y), turnToDegrees(z)];
};
