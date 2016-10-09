Blockly.Blocks['telegram_init'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Telegram Bot");
        this.appendValueInput("bot_token")
            .setCheck("String")
            .appendField("Token");
        this.appendStatementInput("config")
            .setCheck("Connection");
        this.setInputsInline(false);
        this.setNextStatement(true, "Action");
        this.setColour(210);
        this.setTooltip('');
    }
};


Blockly.Blocks['telegram_webhook'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Webhook");
        this.appendValueInput("webhook_url")
            .setCheck("String")
            .appendField("URL");
        this.appendValueInput("webhook_port")
            .setCheck("Number")
            .appendField("Port");
        this.setPreviousStatement(true, "Connection");
        this.setColour(315);
        this.setTooltip('');
    }
};

Blockly.Blocks['telegram_pooling'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Pooling");
        this.setPreviousStatement(true, "Connection");
        this.setColour(315);
        this.setTooltip('');
    }
};


Blockly.Blocks['telegram_action'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Action");
        this.appendStatementInput("action")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["On Text", "text"], ["On Voice", "voice"]]), "ON");
        this.setPreviousStatement(true, "Action");
        this.setNextStatement(true, "Action");
        this.setColour(350);
        this.setTooltip('');
    }
};

Blockly.Blocks['telegram_command'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Command");
        this.appendValueInput("command_input")
            .setCheck("String")
            .appendField("message");
        this.appendStatementInput("command_output")
            .setCheck(null)
            .appendField("Output");
        this.setPreviousStatement(true, "Action");
        this.setNextStatement(true, "Action");
        this.setColour(210);
        this.setTooltip('');
    }
};


Blockly.Blocks['telegram_sendmessage'] = {
    init: function() {
        this.appendValueInput("telegram_send")
            .setCheck(null)
            .appendField("Send Message");
        this.setPreviousStatement(true, null);
        this.setColour(90);
        this.setTooltip('Send text message');
    }
};


Blockly.JavaScript['telegram_init'] = function(block) {
    var token = Blockly.JavaScript.valueToCode(block, 'bot_token', Blockly.JavaScript.ORDER_ATOMIC);
    var connection = Blockly.JavaScript.statementToCode(block, 'config');
    return "'use strict'\n\n" +
        "const Telegram = require('telegram-node-bot');\n" +
        "const TelegramBaseController = Telegram.TelegramBaseController;\n" +
        "const TextCommand = Telegram.TextCommand;\n" +
        "const tg = new Telegram.Telegram("+token+connection+");\n";
};

Blockly.JavaScript['telegram_webhook'] = function(block) {
    var value_webhook_url = Blockly.JavaScript.valueToCode(block, 'webhook_url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_webhook_port = Blockly.JavaScript.valueToCode(block, 'webhook_port', Blockly.JavaScript.ORDER_ATOMIC);
    return ", { webhook: { url: "+value_webhook_url+", port: "+value_webhook_port+"}";
};

Blockly.JavaScript['telegram_pooling'] = function(block) {
  return "";
};

Blockly.JavaScript['telegram_action'] = function(block) {
  var statements_message = Blockly.JavaScript.statementToCode(block, 'action');
  var value_on = Blockly.JavaScript.valueToCode(block, 'ON', Blockly.JavaScript.ORDER_ATOMIC);
  return "";
};


//      Blockly.JavaScript['telegram_action'] = function(block) {
//          var dropdown_name = block.getFieldValue('NAME');
//          var statements_message = Blockly.JavaScript.statementToCode(block, 'message');
//          // TODO: Assemble JavaScript into code variable.
//          var code = '...;\n';
//          return code;
//      };

//Blockly.JavaScript['telegram_plugin_ping'] = function(block) {
//    var value_ping_command = Blockly.JavaScript.valueToCode(block, 'ping_command', Blockly.JavaScript.ORDER_ATOMIC);
//    var statements_ping_response = Blockly.JavaScript.statementToCode(block, 'ping_response');
//    // TODO: Assemble JavaScript into code variable.
//    var code = '...;\n';
//    return code;
//};


//Blockly.JavaScript['telegram_sendmessage'] = function(block) {
//    // TODO: Assemble JavaScript into code variable.
//    var code = '...;\n';
//    return code;
//};