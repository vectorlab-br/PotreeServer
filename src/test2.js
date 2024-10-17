


const Vector3 = require("./Vector3.js").Vector3;
const Plane = require("./Plane.js").Plane;
const PlaneClipRegion = require("./PlaneClipRegion.js").PlaneClipRegion;
const RegionFilter = require("./RegionFilter.js");



//{
//
//	let clipBox = viewer.scene.volumes[0].box;
//
//	let toClip = clipBox.matrixWorld;
//
//	let px = new THREE.Vector3(+0.5, 0, 0).applyMatrix4(toClip);
//	let nx = new THREE.Vector3(-0.5, 0, 0).applyMatrix4(toClip);
//	let py = new THREE.Vector3(0, +0.5, 0).applyMatrix4(toClip);
//	let ny = new THREE.Vector3(0, -0.5, 0).applyMatrix4(toClip);
//	let pz = new THREE.Vector3(0, 0, +0.5).applyMatrix4(toClip);
//	let nz = new THREE.Vector3(0, 0, -0.5).applyMatrix4(toClip);
//
//	let pxN = new THREE.Vector3().subVectors(nx, px).normalize();
//	let nxN = pxN.clone().multiplyScalar(-1);
//	let pyN = new THREE.Vector3().subVectors(ny, py).normalize();
//	let nyN = pyN.clone().multiplyScalar(-1);
//	let pzN = new THREE.Vector3().subVectors(nz, pz).normalize();
//	let nzN = pzN.clone().multiplyScalar(-1);
//
//	let pxPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(pxN, px);
//	let nxPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(nxN, nx);
//	let pyPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(pyN, py);
//	let nyPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(nyN, ny);
//	let pzPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(pzN, pz);
//	let nzPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(nzN, nz);
//
//	let frustum = new THREE.Frustum(pxPlane, nxPlane, pyPlane, nyPlane, pzPlane, nzPlane);
//
//	let message = "";
//	for(let plane of frustum.planes){
//		let vPart = plane.normal.toArray().map(v => v.toFixed(16)).join(", ");
//		vPart = `new Vector3(${vPart})`;
//		message += `new Plane(${vPart}, ${plane.constant}),\n`;
//	}
//	console.log(message)
//
//}


let configurations = {
	LION: {
		// cloudPath: "C:/dev/workspaces/potree/develop/pointclouds/lion_takanawa/cloud.js",
		cloudPath: "/home/fcn/dev/vector3d/potree/potree/pointclouds/lion_takanawa/cloud.js",
		planes: [
			new Plane(new Vector3(-0.4482079723225482, -0.5119879644759681, -0.7327877849543242), 7.635331998803329),
			new Plane(new Vector3(0.4482079723225482, 0.5119879644759681, 0.7327877849543242), -1.0383319988033284),
			new Plane(new Vector3(0.6307569794996448, -0.7620063278215479, 0.1466014637457780), -2.251446493622594),
			new Plane(new Vector3(-0.6307569794996448, 0.7620063278215479, -0.1466014637457780), 4.483446493622594),
			new Plane(new Vector3(0.6334471140979291, 0.3965030650470118, -0.6644772931028794), 4.66099028959601),
			new Plane(new Vector3(-0.6334471140979291, -0.3965030650470118, 0.6644772931028794), -3.234990289596011),
		]
	},
	HEIDENTOR: {
		cloudPath: "D:/dev/pointclouds/archpro/heidentor/cloud.js",
		planes: [
			new Plane(new Vector3(-0.0021499593298130, -0.9999976888347694, 0.0000000000000000), 12.755221474531359),
			new Plane(new Vector3(0.0021499593298130, 0.9999976888347694, 0.0000000000000000), 6.227651358182918),
			new Plane(new Vector3(0.9999976888347694, -0.0021499593298130, 0.0000000000000000), 5.49108018005949),
			new Plane(new Vector3(-0.9999976888347694, 0.0021499593298130, 0.0000000000000000), -2.2906946584275993),
			new Plane(new Vector3(0.0000000000000000, 0.0000000000000000, -1.0000000000000000), 12.696757412117096),
			new Plane(new Vector3(0.0000000000000000, 0.0000000000000000, 1.0000000000000000), 1.052287545266731),
		]
	},
	HEIDENTOR2: {
		cloudPath: "D:/dev/pointclouds/archpro/heidentor/cloud.js",
		planes: [
			new Plane(new Vector3(-0.5810533135258849, -0.5498430456433102, 0.6000413919041573), -2.426929989728168),
			new Plane(new Vector3(0.5810533135258849, 0.5498430456433102, -0.6000413919041573), 3.9479489713198506),
			new Plane(new Vector3(0.7514457840061645, -0.6456125963347886, 0.1360647241323550), 15.100702276773523),
			new Plane(new Vector3(-0.7514457840061645, 0.6456125963347886, -0.1360647241323550), 9.79032051930181),
			new Plane(new Vector3(-0.3125800386140324, -0.5299594329866599, -0.7883125768681531), 19.469078373604525),
			new Plane(new Vector3(0.3125800386140324, 0.5299594329866599, 0.7883125768681531), 6.421207149955186),
		]
	}
};

let config = configurations.HEIDENTOR;
let cloudPath = config.cloudPath;
let planes = config.planes;
let clipRegion = new PlaneClipRegion(planes);


//let point = new Vector3(-7.087, 1.945, 2.651);
//let normal = new Vector3(-7.045, 3.515, 6.264).sub(point).normalize();
//let plane = new Plane(normal, 0).setFromNormalAndCoplanarPoint(normal, point);
//clipRegion = new PlaneClipRegion([plane]);

//let planes = [
//	new Plane(new Vector3(0.8963742828310604, -0.44195590056740874, -0.03446921862695754), 3.17851321982421),
//	new Plane(new Vector3(-0.8786815082620291, -0.4761624512764659, -0.03446921862695755), -1.3051407426067887),
//	new Plane(new Vector3(0.010855657931040704, -0.5633248040854727, 0.8261642208380536), -4.027829182803798),
//	new Plane(new Vector3(0.008357389890395835, -0.4336839878872092, -0.9010262774661276), 6.06217347695099),
//	new Plane(new Vector3(-0.01921304782147159, 0.9970087919726647, 0.07486205662829278), 997.9867077253832),
//	new Plane(new Vector3(0.019213047821436534, -0.9970087919726817, -0.07486205662807431), 2.013292278201878),
//];
//let clipRegion = new PlaneClipRegion(planes);

RegionFilter.filter(cloudPath, clipRegion);
