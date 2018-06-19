//
// strongly inspired, adapted, and taken from the three.js's Vector3 implementation that is under the MIT license [1]
//
// [1] https://github.com/mrdoob/three.js/blob/dev/src/math/Vector3.js
//


class Vector3{

	constructor(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
	}

	length(){
		return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
	}

	distanceTo(vec){
		let dx = vec.x - this.x;
		let dy = vec.y - this.y;
		let dz = vec.z - this.z;

		let distance = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);

		return distance;
	}

	dot(v){
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}

	sub(v){
		let result = new Vector3(
			this.x - v.x,
			this.y - v.y,
			this.z - v.z
		);

		return result;
	}

	multiplyScalar(scalar){
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;
	}

	normalize(){
		let length = Math.sqrt(this.x ** 2 + this.y ** 2 + this.y ** 2);

		this.x = this.x / length;
		this.y = this.y / length;
		this.z = this.z / length;

		return this;
	}

	applyMatrix4(m){
		let {x, y, z} = this;
		let e = m.elements;

		let w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;
	}

	clone(){
		return new Vector3(this.x, this.y, this.z);
	}

	copy(vec){
		this.x = vec.x;
		this.y = vec.y;
		this.z = vec.z;
	}

	toArray(){
		return [this.x, this.y, this.z];
	}

};

module.exports.Vector3 = Vector3;