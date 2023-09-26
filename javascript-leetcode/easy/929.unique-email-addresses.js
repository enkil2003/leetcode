/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails2 = function (emails) {
  const emailAddresses = new Set();
  for (const email of emails) {
    let [name, domain] = email.split('@');
    name = name.replace(/\./g, '').split('+')[0];
    const curatedEmail = name + '@' + domain;
    emailAddresses.add(curatedEmail);
  }
  return emailAddresses.size;
};
// aca entendi mal lo que tenia que hacer
// valide el mail cuando lo que tenia que hacer
// era ver cuantos emails unicos habia, sacando los tags
var numUniqueEmails = function (emails) {
  const hashSet = new Set([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '+',
    '.',
  ]);
  const isValidPrefix = (prefix = '') => {
    if (
      prefix.length === 0 ||
      (prefix.length === 1 &&
        (prefix === '.' || prefix === '+' || !hashSet.has(prefix)))
    ) {
      return false;
    }
    let tagPosition = undefined;
    let dotPosition = undefined;

    for (let i = prefix.length - 1; i >= 0; i--) {
      const letter = prefix.charAt(i);
      // if letter is not in set
      if (!hashSet.has(letter)) {
        return false;
      }
      // store dot position
      if (letter === '.') {
        dotPosition = i;
      }
      // if letter is tag
      if (letter === '+') {
        // if there is already a tag
        if (tagPosition) {
          return false;
        }
        // store tag
        tagPosition = i;
      }
      // if dot is greater than tag
      if (dotPosition > tagPosition) {
        return false;
      }
    }
    return true;
  };
  const isValidPostFix = (postfix = '') => {
    let dots = 0;
    for (let i = 0; i < postfix.length; i++) {
      const letter = postfix.charAt(i);
      if (!hashSet.has(letter) || letter === '+') {
        return false;
      }
      if (letter === '.') {
        dots++;
      }
      if (dots > 2) {
        return false;
      }
    }
    if (dots <= 2) return true;
    return false;
  };

  const answer = [];
  for (const email of emails) {
    const [prefix, postFix] = email.split('@');

    if (!isValidPrefix(prefix)) continue;
    if (!isValidPostFix(postFix)) continue;

    answer.push(email);
  }
  return answer.length;
};
numUniqueEmails([
  'fg.r.u.uzj+o.pw@kziczvh.com',
  'r.cyo.g+d.h+b.ja@tgsg.z.com',
  'fg.r.u.uzj+o.f.d@kziczvh.com',
  'r.cyo.g+ng.r.iq@tgsg.z.com',
  'fg.r.u.uzj+lp.k@kziczvh.com',
  'r.cyo.g+n.h.e+n.g@tgsg.z.com',
  'fg.r.u.uzj+k+p.j@kziczvh.com',
  'fg.r.u.uzj+w.y+b@kziczvh.com',
  'r.cyo.g+x+d.c+f.t@tgsg.z.com',
  'r.cyo.g+x+t.y.l.i@tgsg.z.com',
  'r.cyo.g+brxxi@tgsg.z.com',
  'r.cyo.g+z+dr.k.u@tgsg.z.com',
  'r.cyo.g+d+l.c.n+g@tgsg.z.com',
  'fg.r.u.uzj+vq.o@kziczvh.com',
  'fg.r.u.uzj+uzq@kziczvh.com',
  'fg.r.u.uzj+mvz@kziczvh.com',
  'fg.r.u.uzj+taj@kziczvh.com',
  'fg.r.u.uzj+fek@kziczvh.com',
]);
// @lc code=end
