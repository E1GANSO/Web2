<?php

define('EMAIL_FOR_REPORTS', '');
define('RECAPTCHA_PRIVATE_KEY', '@privatekey@');
define('FINISH_URI', 'http://');
define('FINISH_ACTION', 'message');
define('FINISH_MESSAGE', 'Se ha registrado correctamente');
define('UPLOAD_ALLOWED_FILE_TYPES', 'doc, docx, xls, csv, txt, rtf, html, zip, jpg, jpeg, png, gif');

define('_DIR_', str_replace('\\', '/', dirname(__FILE__)) . '/');
require_once _DIR_ . '/handler.php';

?>

<?php if (frmd_message()): ?>
<link rel="stylesheet" href="<?php echo dirname($form_path); ?>/formoid-metro-cyan.css" type="text/css" />
<span class="alert alert-success"><?php echo FINISH_MESSAGE; ?></span>
<?php else: ?>
<!-- Start Formoid form-->
<link rel="stylesheet" href="<?php echo dirname($form_path); ?>/formoid-metro-cyan.css" type="text/css" />
<script type="text/javascript" src="<?php echo dirname($form_path); ?>/jquery.min.js"></script>
<form class="formoid-metro-cyan" style="background-color:#FFFFFF;font-size:14px;font-family:'Open Sans','Helvetica Neue','Helvetica',Arial,Verdana,sans-serif;color:#666666;max-width:720px;min-width:150px" method="post"><div class="title"><h2>Registro</h2></div>
	<div class="element-input<?php frmd_add_class("input1"); ?>"><label class="title">Nombre<span class="required">*</span></label><input class="large" type="text" name="input1" required="required"/></div>
	<div class="element-input<?php frmd_add_class("input"); ?>"><label class="title">Apellido<span class="required">*</span></label><input class="large" type="text" name="input" required="required"/></div>
	<div class="element-email<?php frmd_add_class("email"); ?>"><label class="title">Email<span class="required">*</span></label><input class="large" type="email" name="email" value="" required="required"/></div>
	<div class="element-select<?php frmd_add_class("select"); ?>"><label class="title">Select<span class="required">*</span></label><div class="large"><span><select name="select" required="required">

		<option value="option 1">option 1</option>
		<option value="option 2">option 2</option>
		<option value="option 3">option 3</option></select><i></i></span></div></div>
	<div class="element-phone<?php frmd_add_class("phone"); ?>"><label class="title">Telefono</label><input class="large" type="tel" pattern="[+]?[\.\s\-\(\)\*\#0-9]{3,}" maxlength="24" name="phone"  value=""/></div>
	<div class="element-radio<?php frmd_add_class("radio"); ?>"><label class="title">Ocupaci??n<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio" value="Docente" required="required"/><span>Docente</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio" value="Estudiante" required="required"/><span>Estudiante</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio1"); ?>"><label class="title">Sexo<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio1" value="Hombre" required="required"/><span>Hombre</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio1" value="Mujer" required="required"/><span>Mujer</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-password<?php frmd_add_class("password"); ?>"><label class="title">Password<span class="required">*</span></label><input class="large" type="password" name="password" value="" required="required"/></div>
	<div class="element-password<?php frmd_add_class("password1"); ?>"><label class="title">confirmar Password<span class="required">*</span></label><input class="large" type="password" name="password1" value="" required="required"/></div>
<div class="submit"><input type="submit" value="Registrarme"/></div></form><script type="text/javascript" src="<?php echo dirname($form_path); ?>/formoid-metro-cyan.js"></script>

<!-- Stop Formoid form-->
<?php endif; ?>

<?php frmd_end_form(); ?>