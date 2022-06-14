var editor, workspace, _$_codeRunning = false, stopController = new AbortController,
scene = new THREE.Scene, renderer, camera;
onload = async() => {
	renderer = new THREE.WebGLRenderer({canvas: document.getElementById("preview-canvas")});
	renderer.shadowMap.enabled = true;
	var editorOverlay = document.getElementById("editor-overlay");
	editor = document.getElementById("editor");
	workspace = Blockly.inject(editor, {
		toolbox: await fetch("toolbox.xml").then(arg => arg.text()),
		sounds: true,
		renderer: "thrasos",
		theme: Blockly.Theme.defineTheme("MatrixBait", {
			componentStyles: {
				workspaceBackgroundColour: "var(--theme-color-bg)",
				toolboxBackgroundColour: "var(--theme-color-lighter-bg)",
				toolboxForegroundColour: "var(--theme-color-text)",
				flyoutBackgroundColour: "var(--theme-color-lighter-bg)",
				flyoutForegroundColour: "var(--theme-color-text)",
				flyoutOpacity: 0.8,
				scrollbarColour: "var(--theme-color-secondary)",
				scrollbarOpacity: 1
			},
			fontStyle: {
				family: "var(--theme-font)",
				weight: "normal",
				size: 7.5
			}
		}),
		maxTrashcanContents: 10,
		zoom: {
			controls: true,
			wheel: true,
			pinch: true,
			startScale: 1.25,
			scaleSpeed: 1.15,
			maxScale: 2,
			minScale: 0.75
		}
	});
	onresize = e => {
		var element = editorOverlay;
		var x = 0;
		var y = 0;
		do {
			x += element.offsetLeft;
			y += element.offsetTop;
			element = element.offsetParent;
		}
		while (element);
		editor.style.left = x + "px";
		editor.style.top = y + "px";
		editor.style.width = editorOverlay.offsetWidth + "px";
		editor.style.height = editorOverlay.offsetHeight + "px";
		Blockly.svgResize(workspace);
		var size = document.querySelector(".tab.selected");
		size = Math.min(size.offsetHeight, size.offsetWidth);
		renderer.setSize(size, size);
	}
	onresize();
	Blockly.svgResize(workspace);
	workspace.addChangeListener(() => {
		document.querySelector("#tab-code > pre > code").innerHTML
		= js_beautify(Blockly.JavaScript.workspaceToCode(workspace));
	});
}
function switchToTab(tab) {
	document.querySelectorAll(".tab.selected").forEach(tab => tab.classList.remove("selected"));
	document.querySelectorAll(".switch-tab.selected").forEach(tab => tab.classList.remove("selected"));
	document.getElementById("tab-" + tab).classList.add("selected");
	document.getElementById("switch-tab-" + tab).classList.add("selected");
}
async function run(elm) {
	if (_$_codeRunning) {
		_$_codeRunning = false;
		elm.classList.remove("selected");
		stopController.abort();
	}
	else {
		camera = new THREE.PerspectiveCamera;
		scene.clear();
		_$_codeRunning = true;
		switchToTab("run");
		elm.classList.add("selected");
		function frame() {
			if (_$_codeRunning)
				requestAnimationFrame(frame);
			camera.updateProjectionMatrix();
			renderer.render(scene, camera);
		}
		frame();
		await eval(`(async() => {${document.querySelector("#tab-code > pre > code").innerText}})()`);
		if (_$_codeRunning)
			run(elm);
	}
}
function save() {
	var name = prompt("Download name", "project.xml"),
	text = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
	if (!name) {
		return;
	}
	var a = document.createElement("a");
	a.href = "data:application/xml;base64," + btoa(text);
	a.download = name;
	a.click();
}
function load() {
	var inp = document.createElement("input");
	inp.type = "file";
	inp.accept = "application/xml";
	inp.onchange = () => {
		var fr = new FileReader;
		fr.onload = () => {
			Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(fr.result), workspace);
		}
		fr.readAsText(inp.files[0]);
	}
	inp.click();
}