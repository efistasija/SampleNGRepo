/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3ABD8DCE-2582-4300-AEFF-A4224EA7CBFD"}
 */
var retVal = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"79110A53-6384-4BE9-B69E-DD380D894D9E"}
 */
function handleButtonAction(event) {
	if ( (elements[event.getElementName()] ? elements[event.getElementName()].text : '') == i18n.getI18NMessage('servoy.button.ok')) {
		returnValue = retVal;
	}
}

/**
 * @param {Array<String>} aArguments
 * @param {String} sIconStyle
 * @param {Number} nDialogWidth
 * @param {Number} nDialogHeight
 *
 * @properties={typeid:24,uuid:"5A45A550-05F0-4C2B-AC29-B7736E5E6995"}
 */
function setupForm(aArguments, sIconStyle, nDialogWidth, nDialogHeight) {
	var aBtn = aArguments.slice(2, aArguments.length),
		oForm = setupButtons(aBtn, false, nDialogWidth, nDialogHeight),
		oLabel = oForm.newLabel("", 15, 15, 60, 60);
	oLabel.styleClass = sIconStyle;
	oLabel.mediaOptions =  SM_MEDIAOPTION.ENLARGE |SM_MEDIAOPTION.REDUCE

	oLabel = oForm.newLabel("", 90, 15, nDialogWidth - 100, 90);
	oLabel.styleClass = 'dialogs_message';
	oLabel.verticalAlignment = SM_ALIGNMENT.TOP;
	oLabel.text = '<html>' + utils.stringReplace(utils.stringReplace(utils.stringReplace(aArguments[0], "\r\n", "<br />"), "\n", "<br />"), "\r", "<br />") + '</html>';
	controller.recreateUI();
	elements.fldValue.setLocation(85, nDialogHeight - 71);
	elements.fldValue.setSize(nDialogWidth - 120, 22);
	
	/** @type {Array<String>} */
	var values = aArguments[1]
	application.setValueListItems("dialogs_valuelist", values);
	retVal = aArguments[1][0];
	callbackMethod = handleButtonAction;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B82CF74-2CFE-4BC7-B5B2-801E28F91A0F"}
 */
function onShow(firstShow, event) {
	elements.fldValue.requestFocus();
}