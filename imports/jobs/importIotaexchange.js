SyncedCron.add({
  name: 'Import data from iotaexchange',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 5 seconds');
  },
  job: function() {
    return Meteor.call('trades.importFromIotaExchange');
  }
});

SyncedCron.start();