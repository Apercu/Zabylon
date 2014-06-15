module.exports = function Block(map, x, y) {

	var self = this;

	var game = map.game;

	this.x = x;
	this.y = y;
	this.map = map;
	this.mesh = null;

	this.center = {
		x: this.x,
		y: this.y
	};

	function initBlock() {
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshPhongMaterial({color: 0x0000ff});
		self.mesh = new THREE.Mesh(geometry, material);
		game.scene.add(self.mesh);
		self.mesh.coords = {
			x: x,
			y: y
		};
		game.objects.push(self.mesh);
		self.mesh.position.x = self.center.x + (0.1 * x);
		self.mesh.position.y = self.center.y + (0.1 * y);
	}
	initBlock();
};