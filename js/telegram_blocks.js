Blockly.Blocks['telegram_init'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Telegram Bot");
        this.appendStatementInput("config")
            .setCheck("Config");
        this.setNextStatement(true, "Action");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['telegram_config'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Configuration");
        this.appendValueInput("bot_name")
            .setCheck("String")
            .appendField("Name");
        this.appendValueInput("bot_token")
            .setCheck("String")
            .appendField("Token");
        this.appendStatementInput("bot_conection")
            .setCheck("Connection")
            .appendField("Connection");
        this.setPreviousStatement(true, "Config");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['telegram_pooling'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Pooling");
        this.setPreviousStatement(true, "Connection");
        this.setColour(315);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Blocks['telegram_action'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Action");
        this.appendStatementInput("message")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["On Text", "text"], ["On Voice", "voice"]]), "NAME");
        this.setPreviousStatement(true, "Action");
        this.setNextStatement(true, "Action");
        this.setColour(350);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['telegram_plugin_ping'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Ping");
        this.appendValueInput("ping_command")
            .setCheck("String")
            .appendField("Command");
        this.appendStatementInput("ping_response")
            .setCheck(null)
            .appendField("Output");
        this.setPreviousStatement(true, "Action");
        this.setNextStatement(true, "Action");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['telegram_sendmessage'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Send Message");
        this.setPreviousStatement(true, null);
        this.setColour(300);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

      Blockly.JavaScript['telegram_init'] = function(block) {
          return "'use strict'\n\n" +
              "const Telegram = require('telegram-node-bot');\n" +
              "const TelegramBaseController = Telegram.TelegramBaseController;\n" +
              "const TextCommand = Telegram.TextCommand;\n";
      };

      Blockly.JavaScript['telegram_config'] = function(block) {
          var value_bot_name = Blockly.JavaScript.valueToCode(block, 'bot_name', Blockly.JavaScript.ORDER_ATOMIC);
          var value_bot_token = Blockly.JavaScript.valueToCode(block, 'bot_token', Blockly.JavaScript.ORDER_ATOMIC);
          var statements_bot_conection = Blockly.JavaScript.statementToCode(block, 'bot_conection');

          //return "const tg = new Telegram.Telegram('"+value_bot_token+"');\n";
      };


//      Blockly.JavaScript['telegram_webhook'] = function(block) {
//          var value_webhook_url = Blockly.JavaScript.valueToCode(block, 'webhook_url', Blockly.JavaScript.ORDER_ATOMIC);
//          var value_webhook_port = Blockly.JavaScript.valueToCode(block, 'webhook_port', Blockly.JavaScript.ORDER_ATOMIC);
//          // TODO: Assemble JavaScript into code variable.
//          var code = '...;\n';
//          return code;
//      };

      Blockly.JavaScript['telegram_pooling'] = function(block) {
          return "";
      };

//      Blockly.JavaScript['telegram_action_ontext'] = function(block) {
//          var statements_message = Blockly.JavaScript.statementToCode(block, 'message');
//          // TODO: Assemble JavaScript into code variable.
//          var code = '...;\n';
//          return code;
//      };


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