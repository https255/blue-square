// Let's make a scene
var scene = new THREE.Scene();
// Add a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Define a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define Geometry
var geometry = new THREE.BoxGeometry(1, 1, 1);
// And Material
var material = new THREE.MeshBasicMaterial({
    color: 0xfff
});
// Combine them
var cube = new THREE.Mesh(geometry, material);
// Add them to the scene
scene.add(cube);
// Camera needs a position
camera.position.z = 3;

// Render Loop
function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.003;
    cube.rotation.y += 0.003;
    renderer.render(scene, camera);
}
render();

// See also:
// https://three.js.org/docs/index.html#Manual/Introduction/Creating_a_scene