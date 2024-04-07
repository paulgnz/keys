import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

function Camera() {
    const { camera, gl } = useThree();

    useEffect(() => {
        camera.position.set(0, 1, 5);
        camera.lookAt(0, 1, 0);
        camera.updateProjectionMatrix();
        camera.fov = 60;
        const updateCamera = () => {
        // Update aspect ratio and projection matrix
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        // Update renderer size
        gl.setSize(window.innerWidth, window.innerHeight);
        };

        // Set initial size and update on window resize
        updateCamera();
        window.addEventListener('resize', updateCamera);

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', updateCamera);
    }, [camera, gl]); // Dependencies

    return null; // This component does not render anything itself
    };

export default Camera;