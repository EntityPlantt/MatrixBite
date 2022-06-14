fetch("assets/blocks.json").then(arg => arg.json()).then(Blockly.defineBlocksWithJsonArray);

async function _$_wait(seconds) {
	await new Promise(ret => {
		setTimeout(ret, 1000 * seconds);
		stopController.signal.addEventListener("abort", ret);
	});
}
Blockly.JavaScript['number'] = function(block) {
	return [block.getFieldValue('value'), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['operator'] = function(block) {
	var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_NONE);
	var dropdown_operator = block.getFieldValue('operator');
	var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_NONE);
	return [`(${value_num1} ${dropdown_operator} ${value_num2})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['number_from_text'] = function(block) {
	var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE);
	return [`parseFloat(${value_text})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['integer_from_text'] = function(block) {
	var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE);
	return [`parseInt(${value_text})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_join'] = function(block) {
	var value_text_1 = Blockly.JavaScript.valueToCode(block, 'text_1', Blockly.JavaScript.ORDER_NONE);
	var value_text_2 = Blockly.JavaScript.valueToCode(block, 'text_2', Blockly.JavaScript.ORDER_NONE);
	return [`(${value_text_1} + ${value_text_2})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['text_substr'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE);
  var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_NONE);
  var checkbox_end_enabled = block.getFieldValue('end_enabled') === 'TRUE';
  var value_end = Blockly.JavaScript.valueToCode(block, 'end', Blockly.JavaScript.ORDER_NONE);
  if (checkbox_end_enabled) {
  	return [`${value_text}.substr(${value_start}, ${value_end})`, Blockly.JavaScript.ORDER_MEMBER];
  }
  else {
  	return [`${value_text}.substr(${value_start})`, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['logical_operator'] = function(block) {
	var value_val1 = Blockly.JavaScript.valueToCode(block, 'val1', Blockly.JavaScript.ORDER_NONE);
	var dropdown_operator = block.getFieldValue('operator');
	var value_val2 = Blockly.JavaScript.valueToCode(block, 'val2', Blockly.JavaScript.ORDER_NONE);
	return [`(${value_val1} ${dropdown_operator} ${value_val2})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['boolean'] = function(block) {
	return [block.getFieldValue('value'), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['not'] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
	return [`(!${value_value})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['text_string'] = function(block) {
	return [JSON.stringify(block.getFieldValue('text')), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['length'] = function(block) {
	var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE);
	return [`${value_text}.length`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['console'] = function(block) {
	var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_NONE);
	return `console.${block.getFieldValue('level')}(${value_data});`;
};

Blockly.JavaScript['console_group'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
	return `console.group(${value_name});`;
};

Blockly.JavaScript['console_ungroup'] = function(block) {
	return 'console.groupEnd();';
};

Blockly.JavaScript['math_function'] = function(block) {
	var dropdown_name = block.getFieldValue('NAME');
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
	return [`Math.${dropdown_name}(${value_value})`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['degrees_radians'] = function(block) {
	var dropdown_path = block.getFieldValue('path');
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
	return [`(${value_value} ${dropdown_path})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string_contains'] = function(block) {
	var value_substr = Blockly.JavaScript.valueToCode(block, 'substr', Blockly.JavaScript.ORDER_NONE);
	var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_NONE);
	return [`${value_string}.includes(${value_substr})`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['char_code'] = function(block) {
	var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_NONE);
	var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE);
	return [`${value_text}.charCodeAt(${value_pos})`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['if'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  return `if (${value_condition}) {${statements_statement}}`;
};

Blockly.JavaScript['if_else'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var statements_statement_else = Blockly.JavaScript.statementToCode(block, 'statement_else');
  return `if (${value_condition}) {${statements_statement}} else {${statements_statement_else}}`;
};

Blockly.JavaScript['while'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  return `while (_$_codeRunning && ${value_condition}) {${statements_statement}}`;
};

Blockly.JavaScript['until'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  return `while (_$_codeRunning && !(${value_condition})) {${statements_statement}}`;
};

Blockly.JavaScript['repeat'] = function(block) {
  var value_times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_NONE);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var blockNow = block.getParent(), repeatBlocks = 0;
  while (blockNow != null) {
  	if (blockNow.type == 'repeat') {
  		repeatBlocks++;
  	}
  	blockNow = blockNow.getParent();
  }
  return `for (var iterator${repeatBlocks} = 0; _$_codeRunning && iterator${repeatBlocks} < ${value_times};
  iterator${repeatBlocks}++) {${statements_statement}}`;
};

Blockly.JavaScript['do_while'] = function(block) {
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);
  return `do {${statements_statement}} while (_$_codeRunning && ${value_condition});`;
};

Blockly.JavaScript['forever'] = function(block) {
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  return `while (_$_codeRunning) {${statements_statement}}`;
};

Blockly.JavaScript['wait'] = function(block) {
  var value_seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_NONE);
  return `await _$_wait(${value_seconds});`;
};

Blockly.JavaScript['custom_code'] = function(block) {
  return block.getFieldValue('code');
};

Blockly.JavaScript['custom_code_inline'] = function(block) {
  return [block.getFieldValue('code'), Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['to_boolean'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return [`Boolean(${value_value})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['iterator_set'] = function(block) {
  var number_index = block.getFieldValue('index');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `iterator${number_index} = ${value_value};`;
};

Blockly.JavaScript['iterator_get'] = function(block) {
  return ['iterator' + block.getFieldValue('index'), Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['object_set'] = function(block) {
  var value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_NONE);
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}[${value_property}] = ${value_value};`;
};

Blockly.JavaScript['object_new'] = function(block) {
  return ['new Object', Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['object_get'] = function(block) {
  var value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_NONE);
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}[${value_property}]`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object_remove'] = function(block) {
  var value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_NONE);
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return `delete ${value_object}[${value_property}];`;
};

Blockly.JavaScript['array_new'] = function(block) {
  var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_NONE);
  return [`new Array(${value_length})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['array_set'] = function(block) {
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_NONE);
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_array}[${value_index}] = ${value_value};`;
};

Blockly.JavaScript['array_get'] = function(block) {
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_NONE);
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_NONE);
  return [`${value_array}[${value_index}]`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['array_push'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_NONE);
  return `${value_array}.push(${value_value});`;
};

Blockly.JavaScript['array_unshift'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_NONE);
  return `${value_array}.unshift(${value_value});`;
};

Blockly.JavaScript['array_pop'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_NONE);
  return `${value_array}.pop();`;
};

Blockly.JavaScript['array_shift'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_NONE);
  return `${value_array}.shift();`;
};

Blockly.JavaScript['array_splice'] = function(block) {
  var value_remove_elements_count = Blockly.JavaScript.valueToCode(block, 'remove_elements_count', Blockly.JavaScript.ORDER_NONE);
  var value_remove_index = Blockly.JavaScript.valueToCode(block, 'remove_index', Blockly.JavaScript.ORDER_NONE);
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_NONE);
  var value_add_elements = Blockly.JavaScript.valueToCode(block, 'add_elements', Blockly.JavaScript.ORDER_NONE);
  if (block.getFieldValue('add') === 'TRUE') {
  	return `${value_array}.splice(${value_remove_index}, ${value_remove_elements_count}, ...${value_add_elements});`;
  }
  else {
  	return `${value_array}.splice(${value_remove_index}, ${value_remove_elements_count});`;
  }
};

Blockly.JavaScript['object_keys_values'] = function(block) {
  var dropdown_keys_or_values = block.getFieldValue('keys_or_values');
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`Object.${dropdown_keys_or_values}(${value_object})`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['array_slice'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_NONE);
  var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_NONE);
  var checkbox_end_enabled = block.getFieldValue('end_enabled') === 'TRUE';
  var value_end = Blockly.JavaScript.valueToCode(block, 'end', Blockly.JavaScript.ORDER_NONE);
  if (checkbox_end_enabled) {
  	return [`${value_array}.slice(${value_start}, ${value_end})`, Blockly.JavaScript.ORDER_MEMBER];
  }
  else {
  	return [`${value_array}.slice(${value_start})`, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['for_array'] = function(block) {
  var variable_iterator = Blockly.JavaScript.nameDB_.getName(
    block.workspace.getVariableById(block.getFieldValue('iterator')).name,
    Blockly.Variables.NAME_TYPE
	);
  variable_iterator = variable_iterator.substr(0, variable_iterator.length - 1);
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_NONE);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  return `for (${variable_iterator} of ${value_array}) {${statements_statement}}`;
};

Blockly.JavaScript['scene_background_set'] = function(block) {
  var value_background = Blockly.JavaScript.valueToCode(block, 'background', Blockly.JavaScript.ORDER_NONE);
  return `scene.background = ${value_background};`;
};

Blockly.JavaScript['scene_background_get'] = function(block) {
  return ['scene.background', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['scene_add'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return `scene.add(${value_object});`;
};

Blockly.JavaScript['scene_remove'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return `scene.remove(${value_object});`;
};

Blockly.JavaScript['mesh_create'] = function(block) {
  var value_geometry = Blockly.JavaScript.valueToCode(block, 'geometry', Blockly.JavaScript.ORDER_NONE);
  var value_material = Blockly.JavaScript.valueToCode(block, 'material', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.Mesh(${value_geometry}, ${value_material})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['geometry_box'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_NONE);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_NONE);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.BoxGeometry(${value_width}, ${value_height}, ${value_depth})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['geometry_capsule'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_NONE);
  var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.CapsuleGeometry(${value_radius}, ${length})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['geometry_circle'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.CircleGeometry(${value_radius}, 32)`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['geometry_cone'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_NONE);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.ConeGeometry(${value_radius}, ${value_height}, 32)`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['geometry_prism'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_NONE);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_NONE);
  var value_segments = Blockly.JavaScript.valueToCode(block, 'segments', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.CylinderGeometry(${value_radius}, ${value_radius}, ${value_height}, ${value_segments})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['geometry_dodecahedron'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.DodecahedronGeometry(${value_radius})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['geometry_sphere'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.SphereGeometry(${value_radius})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['material_new'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var checkbox_color_enabled = block.getFieldValue('color_enabled') === 'TRUE';
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
  var checkbox_texture_enabled = block.getFieldValue('texture_enabled') === 'TRUE';
  var value_texture = Blockly.JavaScript.valueToCode(block, 'texture', Blockly.JavaScript.ORDER_NONE);
  var checkbox_wireframe = block.getFieldValue('wireframe').toLowerCase();
  var checkbox_transparent = block.getFieldValue('transparent').toLowerCase();
  var value_shininess = Blockly.JavaScript.valueToCode(block, 'shininess', Blockly.JavaScript.ORDER_NONE);
  var checkbox_specular_enabled = block.getFieldValue('specular_enabled') === 'TRUE';
  var value_specular = Blockly.JavaScript.valueToCode(block, 'specular', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.Mesh${dropdown_type}Material({
    ${checkbox_color_enabled ? `color: ${value_color},` : ''}
    ${checkbox_texture_enabled ? `map: ${value_texture},` : ''}
    ${checkbox_specular_enabled ? `specular: ${value_specular},` : ''}
    wireframe: ${checkbox_wireframe},
    transparent: ${checkbox_transparent},
    shininess: ${value_shininess}
  })`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['color_new_rgb'] = function(block) {
  var value_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_NONE);
  var value_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_NONE);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.Color(${value_r}, ${value_g}, ${value_b})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['color_new_str'] = Blockly.JavaScript['color_new_hex'] = function(block) {
  var value_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.Color(${value_r})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['color_comparison'] = function(block) {
  var value_color1 = Blockly.JavaScript.valueToCode(block, 'color1', Blockly.JavaScript.ORDER_NONE);
  var value_color2 = Blockly.JavaScript.valueToCode(block, 'color2', Blockly.JavaScript.ORDER_NONE);
  return [`${value_color1}.equals(${value_color2})`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['color_lerp'] = function(block) {
  var value_color1 = Blockly.JavaScript.valueToCode(block, 'color1', Blockly.JavaScript.ORDER_NONE);
  var value_color2 = Blockly.JavaScript.valueToCode(block, 'color2', Blockly.JavaScript.ORDER_NONE);
  var value_alpha = Blockly.JavaScript.valueToCode(block, 'alpha', Blockly.JavaScript.ORDER_NONE);
  return [`${value_color1}.lerp(${value_color2}, ${value_alpha})`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['void'] = function(block) {
  var value_statement = Blockly.JavaScript.valueToCode(block, 'statement', Blockly.JavaScript.ORDER_NONE);
  return `void(${value_statement});`;
};

Blockly.JavaScript['color_multiply'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
  var value_scalar = Blockly.JavaScript.valueToCode(block, 'scalar', Blockly.JavaScript.ORDER_NONE);
  return [`${value_color}.multiplyScalar(${value_scalar})`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['color_convert_array'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
  return [`${value_color}.toArray()`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['color_get_r'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
  return [`${value_color}.r`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['color_get_g'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
  return [`${value_color}.g`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['color_get_b'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
  return [`${value_color}.b`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['color_new_input'] = function(block) {
  return [`new THREE.Color(${JSON.stringify(block.getFieldValue('color'))})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['object3d_position_set'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_NONE);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_NONE);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.position.set(${value_x}, ${value_y}, ${value_z});`;
};

Blockly.JavaScript['object3d_position_set_x'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.position.x = ${value_value};`;
};

Blockly.JavaScript['object3d_position_set_y'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.position.y = ${value_value};`;
};

Blockly.JavaScript['object3d_position_set_z'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.position.z = ${value_value};`;
};

Blockly.JavaScript['object3d_position_get_x'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.position.x`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_position_get_y'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.position.y`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_position_get_z'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.position.z`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_position_get'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.position`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_rotation_set'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_NONE);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_NONE);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.rotation.set(${value_x}, ${value_y}, ${value_z});`;
};

Blockly.JavaScript['object3d_rotation_set_x'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.rotation.x = ${value_value};`;
};

Blockly.JavaScript['object3d_rotation_set_y'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.rotation.y = ${value_value};`;
};

Blockly.JavaScript['object3d_rotation_set_z'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.rotation.z = ${value_value};`;
};

Blockly.JavaScript['object3d_rotation_get_x'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.rotation.x`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_rotation_get_y'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.rotation.y`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_rotation_get_z'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.rotation.z`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_material_get'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.material`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_geometry_get'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.geometry`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['camera_get'] = function(block) {
  return ['camera', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['object3d_lookat'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.lookAt(${value_target}.position);`;
};

Blockly.JavaScript['null'] = function(block) {
  return [block.getFieldValue('value_type'), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['typeof'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return [`typeof ${value_value}`, Blockly.JavaScript.ORDER_TYPEOF];
};

Blockly.JavaScript['texture_new'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.TextureLoader().load(${value_url})`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_lookat_coordinates'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_coords = Blockly.JavaScript.valueToCode(block, 'coords', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.lookAt(${value_coords});`;
};

Blockly.JavaScript['function'] = function(block) {
  var text_name = block.getFieldValue('name');
  var checkbox_async = block.getFieldValue('async') === 'TRUE';
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  return [`(${checkbox_async ? 'async ' : ''}function ${text_name}(...args) {${statements_statement}})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['return'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `return ${value_value};`;
};

Blockly.JavaScript['return_undefined'] = function(block) {
  return 'return;';
};

Blockly.JavaScript['call_function'] = function(block) {
  var value_function = Blockly.JavaScript.valueToCode(block, 'function', Blockly.JavaScript.ORDER_NONE);
  var checkbox_params_enabled = block.getFieldValue('params_enabled') === 'TRUE';
  var value_params = Blockly.JavaScript.valueToCode(block, 'params', Blockly.JavaScript.ORDER_NONE);
  var checkbox_await = block.getFieldValue('await') === 'TRUE';
  return [`${checkbox_await ? 'await ' : ''}${value_function}(...${checkbox_params_enabled ? value_params : '[]'})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['function_arguments'] = function(block) {
  return ['args', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['light_new'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
  var value_intensity = Blockly.JavaScript.valueToCode(block, 'intensity', Blockly.JavaScript.ORDER_NONE);
  return [`new THREE.${dropdown_type}Light(${value_color}, ${value_intensity})`, Blockly.JavaScript.ORDER_NEW];
};

Blockly.JavaScript['camera_fov_set'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `camera.fov = ${value_value}`;
};

Blockly.JavaScript['camera_fov_get'] = function(block) {
  return ['camera.fov', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['clone_three_object'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.clone()`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_shadow_cast_set'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.castShadow = ${value_value}`;
};

Blockly.JavaScript['object3d_shadow_receive_set'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  return `${value_object}.receiveShadow = ${value_value}`;
};

Blockly.JavaScript['object3d_shadow_cast_get'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.castShadow`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['object3d_shadow_receive_get'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_NONE);
  return [`${value_object}.receiveShadow`, Blockly.JavaScript.ORDER_MEMBER];
};