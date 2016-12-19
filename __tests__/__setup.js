// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import JasmineExpect from 'jasmine-expect'  // eslint-disable-line
import MockDate from 'mockdate'


// lock down datetime+timezone for testing between dev/build boxes
MockDate.set(1482182094 * 1000)
