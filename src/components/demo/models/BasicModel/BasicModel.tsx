import { preventCanvasBubbling } from '../../../../utils/preventCanvasBubbling';
import { MeshPhysicalMaterialProps } from '@react-three/fiber';
import { memo } from 'react';

// type TextureWithUndefine = Texture | false;

// interface Maps {
//     map?: TextureWithUndefine;
//     normalMap?: TextureWithUndefine;
//     roughnessMap?: TextureWithUndefine;
//     aoMap?: TextureWithUndefine;
//     emissiveMap?: TextureWithUndefine;
//     specularColorMap?: TextureWithUndefine;
//     envMap?: TextureWithUndefine;
//     metalnessMap?: TextureWithUndefine;
//     bumpMap?: TextureWithUndefine;
//     roughness?: number;
//     metalness?: number;
//     aoMapIntensity?: number;
//     emissiveIntensity?: number;
//     normalScale?: number[];
// }

interface BasicModelProps {
    item: any;
    maps: MeshPhysicalMaterialProps;
}

const BasicModel = ({ item, maps }: BasicModelProps) => {
    return (
        <mesh
            {...item}
            castShadow
            receiveShadow
            onPointerEnter={preventCanvasBubbling}
            onClick={preventCanvasBubbling}
        >
            <meshPhysicalMaterial
                {...item.material}
                {...maps}
            ></meshPhysicalMaterial>
        </mesh>
    );
};

export default memo(BasicModel);
