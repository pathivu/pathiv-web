import moment from 'moment';

let now = Date.now();

export const TIME_MAPPING = {
  '30 Mins': {
    start_ts: moment(moment(now).subtract(30, 'minutes')).format('x'),
    end_ts: moment(now).format('x')
  },
  '1 Hour': {
    start_ts: moment(moment(now).subtract(1, 'hours')).format('x'),
    end_ts: moment(now).format('x')
  },
  '2 Hours': {
    start_ts: moment(moment(now).subtract(2, 'hours')).format('x'),
    end_ts: moment(now).format('x')
  },
  '4 Hours': {
    start_ts: moment(moment(now).subtract(4, 'hours')).format('x'),
    end_ts: moment(now).format('x')
  },
  '6 Hours': {
    start_ts: moment(moment(now).subtract(6, 'hours')).format('x'),
    end_ts: moment(now).format('x')
  },
  '8 Hours': {
    start_ts: moment(moment(now).subtract(8, 'hours')).format('x'),
    end_ts: moment(now).format('x')
  },
  '10 Hours': {
    start_ts: moment(moment(now).subtract(10, 'hours')).format('x'),
    end_ts: moment(now).format('x')
  }
};
