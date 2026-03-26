
const ROLES = {
  frontend: {
    name: 'Frontend Developer',
    skills: {
      'Core Web': ['HTML', 'CSS', 'JavaScript'],
      'Frameworks': ['React', 'Vue.js', 'TypeScript'],
      'Tooling': ['Git', 'Webpack', 'npm'],
      'Design': ['Responsive Design', 'Tailwind CSS', 'Figma Basics']
    }
  },
  backend: {
    name: 'Backend Developer',
    skills: {
      'Languages': ['Python', 'Node.js', 'Java'],
      'Databases': ['SQL', 'MongoDB', 'Redis'],
      'APIs': ['REST APIs', 'GraphQL', 'Authentication'],
      'Infrastructure': ['Git', 'Linux', 'Docker']
    }
  },
  fullstack: {
    name: 'Full Stack Developer',
    skills: {
      'Frontend': ['HTML', 'CSS', 'React', 'TypeScript'],
      'Backend': ['Node.js', 'REST APIs', 'SQL'],
      'DevOps': ['Git', 'Docker', 'CI/CD'],
      'Cloud': ['AWS Basics', 'Deployment', 'Linux']
    }
  },
  data: {
    name: 'Data Analyst',
    skills: {
      'Programming': ['Python', 'SQL', 'R Basics'],
      'Visualization': ['Power BI', 'Tableau', 'Matplotlib'],
      'Analysis': ['Statistics', 'Excel', 'Data Cleaning'],
      'ML Basics': ['Pandas', 'NumPy', 'Scikit-learn']
    }
  },
  ml: {
    name: 'ML Engineer',
    skills: {
      'Programming': ['Python', 'NumPy', 'Pandas'],
      'ML Frameworks': ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      'Math': ['Statistics', 'Linear Algebra', 'Calculus'],
      'Deployment': ['Docker', 'MLflow', 'FastAPI']
    }
  },
  devops: {
    name: 'DevOps Engineer',
    skills: {
      'Containers': ['Docker', 'Kubernetes', 'Helm'],
      'CI/CD': ['GitHub Actions', 'Jenkins', 'CI/CD'],
      'Cloud': ['AWS', 'Linux', 'Terraform'],
      'Monitoring': ['Prometheus', 'Grafana', 'Logging']
    }
  },
  mobile: {
    name: 'Mobile Developer',
    skills: {
      'Cross-Platform': ['React Native', 'Flutter', 'Dart'],
      'Native iOS': ['Swift', 'Xcode', 'SwiftUI'],
      'Native Android': ['Kotlin', 'Android Studio', 'Jetpack'],
      'Backend': ['REST APIs', 'Firebase', 'Authentication']
    }
  },
  cybersec: {
    name: 'Cybersecurity Engineer',
    skills: {
      'Networking': ['TCP/IP', 'Firewalls', 'VPN'],
      'Systems': ['Linux', 'Windows Server', 'Active Directory'],
      'Security Tools': ['Wireshark', 'Metasploit', 'Nmap'],
      'Concepts': ['Cryptography', 'Penetration Testing', 'SIEM']
    }
  },
  ux: {
    name: 'UX Designer',
    skills: {
      'Design Tools': ['Figma', 'Adobe XD', 'Sketch'],
      'Research': ['User Research', 'Usability Testing', 'Personas'],
      'Design Skills': ['Wireframing', 'Prototyping', 'Information Architecture'],
      'Visual': ['Typography', 'Color Theory', 'Accessibility']
    }
  }
};

const QUESTIONS = {
  'HTML': [
    { q: 'What does the `alt` attribute on `<img>` tags provide?', opts: ['Alternative text for screen readers & when image fails to load', 'Image alignment', 'Image size', 'Link destination'], ans: 0 },
    { q: 'Which HTML element is used for the largest heading?', opts: ['h6', 'heading', 'h1', 'head'], ans: 2 },
    { q: 'What is the correct HTML for creating a hyperlink?', opts: [' url="..."link', ' href="..."link', 'link href="..."link', 'href url="..."link'], ans: 1 },
    { q: 'Which tag is used to define an unordered list?', opts: ['ol', 'li', 'ul', 'list'], ans: 2 }
  ],
  'CSS': [
    { q: 'Which CSS property controls the text size?', opts: ['text-style', 'font-size', 'text-size', 'font-style'], ans: 1 },
    { q: 'What does `display: flex` do?', opts: ['Makes element invisible', 'Enables flexbox layout', 'Floats element left', 'Adds a border'], ans: 1 },
    { q: 'How do you select elements with class name "box" in CSS?', opts: ['#box', 'box', '.box', '*box'], ans: 2 },
    { q: 'Which property is used to change background color?', opts: ['color', 'bg-color', 'background-color', 'fill'], ans: 2 }
  ],
  'JavaScript': [
    { q: 'Which method is used to add an element to the end of an array?', opts: ['push()', 'pop()', 'shift()', 'append()'], ans: 0 },
    { q: 'What is `typeof null` in JavaScript?', opts: ['"null"', '"undefined"', '"object"', '"boolean"'], ans: 2 },
    { q: 'Which keyword declares a block-scoped variable?', opts: ['var', 'let', 'set', 'define'], ans: 1 },
    { q: 'What does `===` check?', opts: ['Only value', 'Only type', 'Value and type', 'Neither'], ans: 2 }
  ],
  'React': [
    { q: 'What is JSX?', opts: ['A database query language', 'A syntax extension for writing HTML-like code in JS', 'A testing library', 'A CSS framework'], ans: 1 },
    { q: 'Which hook is used for side effects in React?', opts: ['useState', 'useEffect', 'useContext', 'useRef'], ans: 1 },
    { q: 'What does `useState` return?', opts: ['A single value', 'An array with state value and setter', 'A DOM element', 'A promise'], ans: 1 },
    { q: 'What is a key prop used for in lists?', opts: ['Styling', 'Accessibility', 'Uniquely identifying list items for reconciliation', 'Event handling'], ans: 2 }
  ],
  'Python': [
    { q: 'What is the correct way to define a function in Python?', opts: ['function foo():', 'def foo():', 'func foo():', 'define foo():'], ans: 1 },
    { q: 'Which of these is a Python list comprehension?', opts: ['[x for x in range(10)]', '{x: x for x in range(10)}', '(x for x in range(10))', 'list(x in range(10))'], ans: 0 },
    { q: 'What does `len()` do?', opts: ['Sorts a list', 'Returns element count', 'Concatenates strings', 'Deletes an item'], ans: 1 },
    { q: 'Which keyword is used for error handling?', opts: ['catch', 'try/except', 'handle', 'error'], ans: 1 }
  ],
  'SQL': [
    { q: 'Which SQL clause filters rows?', opts: ['ORDER BY', 'GROUP BY', 'WHERE', 'SELECT'], ans: 2 },
    { q: 'What does `JOIN` do?', opts: ['Deletes rows', 'Combines rows from two tables', 'Creates a new table', 'Sorts data'], ans: 1 },
    { q: 'Which aggregate function counts rows?', opts: ['SUM()', 'AVG()', 'COUNT()', 'MAX()'], ans: 2 },
    { q: 'What is a PRIMARY KEY?', opts: ['A row that can be null', 'A unique identifier for each row', 'A foreign reference', 'An index column'], ans: 1 }
  ],
  'Docker': [
    { q: 'What is a Docker image?', opts: ['A running container', 'A read-only template to create containers', 'A virtual machine', 'A network namespace'], ans: 1 },
    { q: 'Which command builds a Docker image?', opts: ['docker run', 'docker build', 'docker pull', 'docker start'], ans: 1 },
    { q: 'What does `docker-compose` do?', opts: ['Compiles code', 'Manages multi-container Docker apps', 'Builds images only', 'Monitors containers'], ans: 1 },
    { q: 'What is a Dockerfile?', opts: ['A runtime config', 'A text file with instructions to build an image', 'A network config', 'A volume definition'], ans: 1 }
  ],
  'Git': [
    { q: 'What does `git commit` do?', opts: ['Uploads to remote', 'Saves staged changes to local history', 'Creates a branch', 'Merges branches'], ans: 1 },
    { q: 'Which command creates a new branch?', opts: ['git merge branch', 'git checkout -b branch', 'git branch -d branch', 'git push branch'], ans: 1 },
    { q: 'What does `git pull` do?', opts: ['Pushes local changes', 'Fetches and merges remote changes', 'Deletes remote branch', 'Creates a PR'], ans: 1 },
    { q: 'What is a merge conflict?', opts: ['A deleted file', 'When two branches edit the same code differently', 'A network error', 'A missing commit'], ans: 1 }
  ],
  'TypeScript': [
    { q: 'TypeScript is a superset of which language?', opts: ['Java', 'C#', 'JavaScript', 'Python'], ans: 2 },
    { q: 'How do you define a typed variable in TypeScript?', opts: ['let x = string', 'let x: string', 'string x', 'var x as string'], ans: 1 },
    { q: 'What is an interface in TypeScript?', opts: ['A class', 'A type contract for objects', 'A function', 'A module'], ans: 1 },
    { q: 'What does `any` type allow?', opts: ['Only strings', 'Only numbers', 'Any type of value', 'Nothing'], ans: 2 }
  ],
  'Node.js': [
    { q: 'Node.js is built on which engine?', opts: ['SpiderMonkey', 'V8', 'Chakra', 'JavaScriptCore'], ans: 1 },
    { q: 'What is `npm`?', opts: ['A testing framework', 'Node package manager', 'A runtime', 'A bundler'], ans: 1 },
    { q: 'Which module handles HTTP in Node.js core?', opts: ['express', 'http', 'net', 'stream'], ans: 1 },
    { q: 'What is the event loop in Node.js?', opts: ['A loop syntax', 'Mechanism for handling async operations', 'A garbage collector', 'A memory manager'], ans: 1 }
  ],
  'Statistics': [
    { q: 'What is the mean of [2, 4, 6, 8]?', opts: ['4', '5', '6', '7'], ans: 1 },
    { q: 'What does standard deviation measure?', opts: ['Central tendency', 'Spread/dispersion of data', 'The max value', 'Correlation'], ans: 1 },
    { q: 'What is a p-value used for?', opts: ['Predicting future values', 'Measuring statistical significance', 'Sorting data', 'Calculating mean'], ans: 1 },
    { q: 'What is a normal distribution shaped like?', opts: ['Skewed left', 'Flat', 'Bell curve', 'Step function'], ans: 2 }
  ],
  'Linux': [
    { q: 'Which command lists files in a directory?', opts: ['dir', 'ls', 'list', 'show'], ans: 1 },
    { q: 'What does `chmod 755` do?', opts: ['Changes file owner', 'Sets read/write/exec permissions', 'Deletes a file', 'Creates a directory'], ans: 1 },
    { q: 'Which command shows running processes?', opts: ['proc', 'ps aux', 'tasks', 'run -l'], ans: 1 },
    { q: 'What does `grep` do?', opts: ['Edits files', 'Searches text with patterns', 'Copies files', 'Lists users'], ans: 1 }
  ],
  'Figma': [
    { q: 'What is a Figma component?', opts: ['A font style', 'A reusable design element', 'A color palette', 'A file format'], ans: 1 },
    { q: 'What is auto-layout in Figma?', opts: ['Automatic export', 'Responsive frame layout', 'Color auto-fill', 'Plugin runner'], ans: 1 },
    { q: 'What are variants used for?', opts: ['Version history', 'Different states of a component', 'Color themes', 'File sharing'], ans: 1 },
    { q: 'What is a prototype in Figma?', opts: ['A real product', 'An interactive clickable mockup', 'A code export', 'A font setting'], ans: 1 }
  ],
  'AWS': [
    { q: 'What does S3 stand for?', opts: ['Simple Storage Service', 'Server Side Script', 'Secure Socket Service', 'Simple Server Sync'], ans: 0 },
    { q: 'What is EC2?', opts: ['Email service', 'Elastic Compute Cloud - virtual servers', 'Database service', 'CDN'], ans: 1 },
    { q: 'What is IAM used for?', opts: ['Image management', 'Identity and Access Management', 'Internet address mapping', 'Infrastructure automation'], ans: 1 },
    { q: 'What is a VPC?', opts: ['Virtual Process Controller', 'Virtual Private Cloud', 'Variable Protocol Config', 'Volume Partition Cache'], ans: 1 }
  ],
  'MongoDB': [
    { q: 'MongoDB stores data as?', opts: ['Rows and columns', 'JSON-like documents (BSON)', 'XML files', 'Binary blobs'], ans: 1 },
    { q: 'What is a MongoDB collection?', opts: ['A database', 'Equivalent to a SQL table', 'A field', 'An index'], ans: 1 },
    { q: 'Which method finds documents?', opts: ['get()', 'find()', 'select()', 'query()'], ans: 1 },
    { q: 'What does `$gt` mean in a query?', opts: ['Greater than', 'Get total', 'Group type', 'Global tag'], ans: 0 }
  ],
  'TensorFlow': [
    { q: 'TensorFlow was developed by?', opts: ['Facebook AI', 'Google Brain', 'OpenAI', 'Microsoft'], ans: 1 },
    { q: 'What is a tensor in TensorFlow?', opts: ['A type of layer', 'A multi-dimensional array', 'A training loop', 'An optimizer'], ans: 1 },
    { q: 'What does `model.fit()` do?', opts: ['Validates the model', 'Trains the model on data', 'Saves the model', 'Exports predictions'], ans: 1 },
    { q: 'What is Keras in TensorFlow?', opts: ['A dataset tool', 'A high-level neural network API', 'A deployment tool', 'A visualization library'], ans: 1 }
  ],
  'Kubernetes': [
    { q: 'What is a Pod in Kubernetes?', opts: ['A server', 'The smallest deployable unit containing containers', 'A namespace', 'A config file'], ans: 1 },
    { q: 'What does kubectl do?', opts: ['Monitors pods', 'CLI to interact with Kubernetes cluster', 'Builds images', 'Manages networks'], ans: 1 },
    { q: 'What is a Deployment in Kubernetes?', opts: ['A network policy', 'Manages desired state of pod replicas', 'A storage class', 'A service'], ans: 1 },
    { q: 'What is a Service in Kubernetes?', opts: ['A storage unit', 'Exposes pods to network traffic', 'A build config', 'A node type'], ans: 1 }
  ],
  'Flutter': [
    { q: 'Flutter uses which programming language?', opts: ['Swift', 'Kotlin', 'Dart', 'TypeScript'], ans: 2 },
    { q: 'What is a Widget in Flutter?', opts: ['A plugin', 'A UI building block', 'A data model', 'A network call'], ans: 1 },
    { q: 'What does `StatefulWidget` allow?', opts: ['Read-only UI', 'UI that can change over time', 'Only static images', 'Network requests only'], ans: 1 },
    { q: 'What does `hot reload` do?', opts: ['Restarts the app', 'Applies code changes instantly without restart', 'Clears cache', 'Runs tests'], ans: 1 }
  ],
  'REST APIs': [
    { q: 'What does REST stand for?', opts: ['Remote Execution Standard Transfer', 'Representational State Transfer', 'Reliable Server Transport', 'Request State Template'], ans: 1 },
    { q: 'Which HTTP method creates a resource?', opts: ['GET', 'DELETE', 'POST', 'PATCH'], ans: 2 },
    { q: 'What is a 404 HTTP status?', opts: ['Server error', 'Unauthorized', 'Not Found', 'Success'], ans: 2 },
    { q: 'What format is commonly used in REST APIs?', opts: ['XML only', 'CSV', 'JSON', 'Binary'], ans: 2 }
  ],
  'Vue.js': [
    { q: 'What is Vue.js primarily used for?', opts: ['Backend APIs', 'Building user interfaces', 'Database management', 'Testing'], ans: 1 },
    { q: 'What directive renders a list in Vue?', opts: ['v-if', 'v-show', 'v-for', 'v-bind'], ans: 2 },
    { q: 'What is the Vue Options API `data()` for?', opts: ['Defining methods', 'Declaring reactive state', 'Routing', 'HTTP calls'], ans: 1 },
    { q: 'What is Vuex?', opts: ['A CSS preprocessor', 'State management library', 'A router', 'A testing tool'], ans: 1 }
  ],
};
const DEFAULT_QUESTIONS = [
  { q: 'How would you rate your practical experience with this skill?', opts: ['I have built real projects with it', 'I understand concepts and have done tutorials', 'I have basic theoretical knowledge', "I've heard of it but never used it"], ans: 0 },
  { q: 'Can you solve problems independently using this skill?', opts: ['Yes, I can solve complex problems', 'Yes, for most common problems', 'I need guidance for most problems', 'No, I cannot use it independently'], ans: 0 },
  { q: 'Have you used this skill in a team/professional setting?', opts: ['Yes, extensively in teams', 'Yes, in a few small projects', 'Only in personal projects', 'Never used it professionally'], ans: 0 },
  { q: 'How up-to-date is your knowledge of this skill?', opts: ['Very current — I follow updates', 'Mostly current', 'Somewhat outdated', 'Very outdated / just basics'], ans: 0 }
];

const RESOURCES = {
  'HTML': [
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', type: 'free' },
    { name: 'freeCodeCamp HTML', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', type: 'free' },
    { name: 'HTML Tutorial – W3Schools', url: 'https://www.w3schools.com/html/', type: 'free' }
  ],
  'CSS': [
    { name: 'MDN CSS Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', type: 'free' },
    { name: 'CSS Tricks', url: 'https://css-tricks.com/', type: 'free' },
    { name: 'Flexbox Froggy (Game)', url: 'https://flexboxfroggy.com/', type: 'free' }
  ],
  'JavaScript': [
    { name: 'JavaScript.info', url: 'https://javascript.info/', type: 'free' },
    { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/', type: 'free' },
    { name: 'JS – The Complete Guide (Udemy)', url: 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/', type: 'paid' }
  ],
  'React': [
    { name: 'React Official Docs', url: 'https://react.dev/', type: 'free' },
    { name: 'React – Full Course (YouTube)', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', type: 'yt' },
    { name: 'The Joy of React (Course)', url: 'https://www.joyofreact.com/', type: 'paid' }
  ],
  'Python': [
    { name: 'Python.org Docs', url: 'https://docs.python.org/3/tutorial/', type: 'free' },
    { name: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com/', type: 'free' },
    { name: 'Python Bootcamp (Udemy)', url: 'https://www.udemy.com/course/complete-python-bootcamp/', type: 'paid' }
  ],
  'SQL': [
    { name: 'SQLZoo (Interactive)', url: 'https://sqlzoo.net/', type: 'free' },
    { name: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/', type: 'free' },
    { name: 'MySQL Tutorial', url: 'https://www.mysqltutorial.org/', type: 'free' }
  ],
  'Docker': [
    { name: 'Docker Official Docs', url: 'https://docs.docker.com/', type: 'free' },
    { name: 'Docker Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE', type: 'yt' },
    { name: 'Docker & Kubernetes (Udemy)', url: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/', type: 'paid' }
  ],
  'Git': [
    { name: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2', type: 'free' },
    { name: 'GitHub Skills', url: 'https://skills.github.com/', type: 'free' },
    { name: 'Git Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'yt' }
  ],
  'TypeScript': [
    { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/', type: 'free' },
    { name: 'TypeScript Course (YouTube)', url: 'https://www.youtube.com/watch?v=BwuLxPH8IDs', type: 'yt' },
    { name: 'TypeScript Deep Dive', url: 'https://basarat.gitbook.io/typescript/', type: 'free' }
  ],
  'Node.js': [
    { name: 'Node.js Docs', url: 'https://nodejs.org/docs/latest/api/', type: 'free' },
    { name: 'Node.js Crash Course (YouTube)', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4', type: 'yt' },
    { name: 'Node.js Design Patterns (Book)', url: 'https://www.nodejsdesignpatterns.com/', type: 'paid' }
  ],
  'Statistics': [
    { name: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'free' },
    { name: 'StatQuest (YouTube)', url: 'https://www.youtube.com/@statquest', type: 'yt' },
    { name: 'Think Stats (Free Book)', url: 'https://greenteapress.com/thinkstats2/', type: 'free' }
  ],
  'Linux': [
    { name: 'Linux Journey', url: 'https://linuxjourney.com/', type: 'free' },
    { name: 'The Linux Command Line (Book)', url: 'https://linuxcommand.org/tlcl.php', type: 'free' },
    { name: 'Linux Basics (YouTube)', url: 'https://www.youtube.com/watch?v=ROjZy1WbCIA', type: 'yt' }
  ],
  'Figma': [
    { name: 'Figma Learn', url: 'https://www.figma.com/resources/learn-design/', type: 'free' },
    { name: 'Figma for Beginners (YouTube)', url: 'https://www.youtube.com/watch?v=FTFaQWZBqQ8', type: 'yt' },
    { name: 'Design Course (Udemy)', url: 'https://www.udemy.com/course/the-complete-figma-ux-ui-design-essential-zero-to-hero/', type: 'paid' }
  ],
  'AWS': [
    { name: 'AWS Free Tier', url: 'https://aws.amazon.com/free/', type: 'free' },
    { name: 'AWS Skill Builder', url: 'https://skillbuilder.aws/', type: 'free' },
    { name: 'AWS Certified (Udemy)', url: 'https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/', type: 'paid' }
  ],
  'MongoDB': [
    { name: 'MongoDB University', url: 'https://university.mongodb.com/', type: 'free' },
    { name: 'MongoDB Docs', url: 'https://www.mongodb.com/docs/', type: 'free' },
    { name: 'MongoDB Crash Course (YouTube)', url: 'https://www.youtube.com/watch?v=ofme2o29ngU', type: 'yt' }
  ],
  'TensorFlow': [
    { name: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials', type: 'free' },
    { name: 'TF for Beginners (YouTube)', url: 'https://www.youtube.com/watch?v=tPYj3fFJGjk', type: 'yt' },
    { name: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning', type: 'paid' }
  ],
  'Kubernetes': [
    { name: 'K8s Official Docs', url: 'https://kubernetes.io/docs/home/', type: 'free' },
    { name: 'Kubernetes Crash Course (YouTube)', url: 'https://www.youtube.com/watch?v=s_o8dwzRlu4', type: 'yt' },
    { name: 'CKA Course (Udemy)', url: 'https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/', type: 'paid' }
  ],
  'Flutter': [
    { name: 'Flutter.dev Docs', url: 'https://docs.flutter.dev/', type: 'free' },
    { name: 'Flutter Bootcamp (Udemy)', url: 'https://www.udemy.com/course/flutter-bootcamp-with-dart/', type: 'paid' },
    { name: 'Flutter Crash Course (YouTube)', url: 'https://www.youtube.com/watch?v=1ukSR1GRtMU', type: 'yt' }
  ],
  'REST APIs': [
    { name: 'REST API Tutorial', url: 'https://restfulapi.net/', type: 'free' },
    { name: 'Postman Learning Center', url: 'https://learning.postman.com/docs/', type: 'free' },
    { name: 'API Design (YouTube)', url: 'https://www.youtube.com/watch?v=lsMQRaeKNDk', type: 'yt' }
  ]
};

const DEFAULT_RESOURCES = [
  { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'free' },
  { name: 'Coursera', url: 'https://www.coursera.org/', type: 'paid' },
  { name: 'YouTube Tutorials', url: 'https://www.youtube.com/', type: 'yt' }
];
let state = {
  selectedRole: null,
  selectedSkills: new Set(),
  assessedSkills: {},   // skill -> { score, correct, total }
  reports: [],
  activityLog: [],
  analyzedRoles: new Set(),
  currentAssessmentQueue: [],
  currentAssessmentIndex: 0,
  currentQuestionIndex: 0,
  currentQuestionList: [],
  currentScore: 0,
  isDark: true
};

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  updateDashboard();
}

function toggleDark() {
  state.isDark = !state.isDark;
  document.body.classList.toggle('light', !state.isDark);
}
function selectRole(roleId) {
  state.selectedRole = roleId;
  state.selectedSkills.clear();
  state.assessedSkills = {};

  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
  event.currentTarget.classList.add('selected');

  const role = ROLES[roleId];
  let html = '';
  for (const [cat, skills] of Object.entries(role.skills)) {
    html += `<div class="skill-section-title">${cat}</div><div class="skill-chips">`;
    skills.forEach(skill => {
      html += `<div class="skill-chip" onclick="toggleSkill(this,'${skill}')" data-skill="${skill}">${skill}</div>`;
    });
    html += '</div>';
  }

  document.getElementById('skillPickerArea').innerHTML = html;
  document.getElementById('skillPickerCard').style.display = 'block';
  document.getElementById('assessmentStatusCard').style.display = 'none';

  logActivity(`Selected role: ${role.name}`);
  updateDashboard();
}

function toggleSkill(el, skill) {
  if (state.selectedSkills.has(skill)) {
    state.selectedSkills.delete(skill);
    el.classList.remove('selected');
  } else {
    state.selectedSkills.add(skill);
    el.classList.add('selected');
  }
  updateDashboard();
}

function clearSelections() {
  state.selectedSkills.clear();
  document.querySelectorAll('.skill-chip').forEach(c => c.classList.remove('selected'));
  updateDashboard();
}
function startAssessments() {
  if (state.selectedSkills.size === 0) {
    alert('Please select at least one skill first!');
    return;
  }

  state.currentAssessmentQueue = [...state.selectedSkills];
  state.currentAssessmentIndex = 0;
  state.assessedSkills = {};

  renderAssessmentStatus();
  document.getElementById('assessmentStatusCard').style.display = 'block';

  startNextAssessment();
}

function renderAssessmentStatus() {
  const list = document.getElementById('assessmentStatusList');
  list.innerHTML = state.currentAssessmentQueue.map(skill => `
    <div class="result-skill-item" id="status-${skill.replace(/[^a-z0-9]/gi,'_')}">
      <span style="font-size:1rem;">⏳</span>
      <span class="result-skill-name">${skill}</span>
      <span class="result-badge" id="status-badge-${skill.replace(/[^a-z0-9]/gi,'_')}">Pending</span>
    </div>
  `).join('');
}

function startNextAssessment() {
  if (state.currentAssessmentIndex >= state.currentAssessmentQueue.length) {
    // All done
    document.getElementById('viewResultsBtn').style.display = 'flex';
    computeResults();
    logActivity('Completed skill assessment for ' + state.currentAssessmentQueue.length + ' skills');
    updateDashboard();
    return;
  }

  const skill = state.currentAssessmentQueue[state.currentAssessmentIndex];
  const questions = QUESTIONS[skill] || DEFAULT_QUESTIONS;
  state.currentQuestionList = questions;
  state.currentQuestionIndex = 0;
  state.currentScore = 0;

  openModal(skill);
}

function openModal(skill) {
  document.getElementById('modal-skill-name').textContent = `📝 ${skill} Assessment`;
  document.getElementById('modal-skill-sub').textContent = `Answer ${state.currentQuestionList.length} questions to evaluate your ${skill} proficiency`;
  document.getElementById('assessModal').classList.add('open');
  renderQuestion();
}

function closeModal() {
  document.getElementById('assessModal').classList.remove('open');
  const skill = state.currentAssessmentQueue[state.currentAssessmentIndex];
  markAssessmentResult(skill, 0, state.currentQuestionList.length);
  state.currentAssessmentIndex++;
  startNextAssessment();
}

function renderQuestion() {
  const q = state.currentQuestionList[state.currentQuestionIndex];
  const total = state.currentQuestionList.length;
  const current = state.currentQuestionIndex + 1;
  const pct = (current / total) * 100;

  document.getElementById('modal-progress').textContent = `Question ${current} of ${total}`;
  document.getElementById('modal-prog-bar').style.width = pct + '%';
  document.getElementById('modal-question').textContent = q.q;
  document.getElementById('modal-feedback').className = 'modal-feedback';
  document.getElementById('modal-feedback').textContent = '';
  document.getElementById('modal-next-btn').style.display = 'none';

  const opts = document.getElementById('modal-options');
  opts.innerHTML = q.opts.map((opt, i) =>
    `<button class="option-btn" onclick="selectOption(this, ${i})">${opt}</button>`
  ).join('');
}

function selectOption(el, idx) {
  const q = state.currentQuestionList[state.currentQuestionIndex];
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);

  const feedback = document.getElementById('modal-feedback');
  feedback.classList.add('show');

  if (idx === q.ans) {
    el.classList.add('correct');
    state.currentScore++;
    feedback.className = 'modal-feedback show good';
    feedback.textContent = '✅ Correct! Well done.';
  } else {
    el.classList.add('wrong');
    allBtns[q.ans].classList.add('correct');
    feedback.className = 'modal-feedback show bad';
    feedback.textContent = `❌ Incorrect. The correct answer is: "${q.opts[q.ans]}"`;
  }

  document.getElementById('modal-next-btn').style.display = 'flex';

  if (state.currentQuestionIndex === state.currentQuestionList.length - 1) {
    document.getElementById('modal-next-btn').textContent = 'Finish Assessment ✓';
  } else {
    document.getElementById('modal-next-btn').textContent = 'Next Question →';
  }
}

function nextQuestion() {
  if (state.currentQuestionIndex < state.currentQuestionList.length - 1) {
    state.currentQuestionIndex++;
    renderQuestion();
  } else {
    // Finished this skill
    const skill = state.currentAssessmentQueue[state.currentAssessmentIndex];
    const total = state.currentQuestionList.length;
    markAssessmentResult(skill, state.currentScore, total);
    document.getElementById('assessModal').classList.remove('open');
    state.currentAssessmentIndex++;
    setTimeout(() => startNextAssessment(), 300);
  }
}

function markAssessmentResult(skill, correct, total) {
  const score = Math.round((correct / total) * 100);
  state.assessedSkills[skill] = { score, correct, total };

  const key = skill.replace(/[^a-z0-9]/gi,'_');
  const statusEl = document.getElementById('status-' + key);
  const badgeEl = document.getElementById('status-badge-' + key);

  if (statusEl) {
    const icon = statusEl.querySelector('span:first-child');
    if (score >= 75) {
      icon.textContent = '✅';
      badgeEl.className = 'result-badge badge-strong';
      badgeEl.textContent = `Strong (${score}%)`;
      // Update chip
      const chip = document.querySelector(`.skill-chip[data-skill="${skill}"]`);
      if (chip) { chip.className = 'skill-chip assessed-good'; }
    } else if (score >= 45) {
      icon.textContent = '⚠️';
      badgeEl.className = 'result-badge badge-average';
      badgeEl.textContent = `Average (${score}%)`;
      const chip = document.querySelector(`.skill-chip[data-skill="${skill}"]`);
      if (chip) { chip.className = 'skill-chip assessed-warn'; }
    } else {
      icon.textContent = '❌';
      badgeEl.className = 'result-badge badge-weak';
      badgeEl.textContent = `Needs Work (${score}%)`;
      const chip = document.querySelector(`.skill-chip[data-skill="${skill}"]`);
      if (chip) { chip.className = 'skill-chip assessed-bad'; }
    }
  }
}

function computeResults() {
  if (!state.selectedRole) return;

  const role = ROLES[state.selectedRole];
  const allRequired = Object.values(role.skills).flat();
  const assessed = state.assessedSkills;

  let strong = [], average = [], weak = [], missing = [];

  allRequired.forEach(skill => {
    if (assessed[skill] !== undefined) {
      const s = assessed[skill].score;
      if (s >= 75) strong.push({ skill, score: s });
      else if (s >= 45) average.push({ skill, score: s });
      else weak.push({ skill, score: s });
    } else {
      missing.push({ skill, score: 0 });
    }
  });

  const matchPct = Math.round((strong.length / allRequired.length) * 100);
  const avgScore = Object.values(assessed).length > 0
    ? Math.round(Object.values(assessed).reduce((a, b) => a + b.score, 0) / Object.values(assessed).length)
    : 0;

  document.getElementById('res-strong').textContent = strong.length;
  document.getElementById('res-avg').textContent = average.length;
  document.getElementById('res-weak').textContent = weak.length + missing.length;

  const statusList = document.getElementById('skillStatusList');
  statusList.innerHTML = allRequired.map(skill => {
    let badgeClass = 'badge-missing', badgeText = 'Not Assessed';
    if (assessed[skill]) {
      const s = assessed[skill].score;
      if (s >= 75) { badgeClass = 'badge-strong'; badgeText = `${s}% Strong`; }
      else if (s >= 45) { badgeClass = 'badge-average'; badgeText = `${s}% Average`; }
      else { badgeClass = 'badge-weak'; badgeText = `${s}% Weak`; }
    }
    return `<div class="result-skill-item">
      <span class="result-skill-name">${skill}</span>
      <span class="result-badge ${badgeClass}">${badgeText}</span>
    </div>`;
  }).join('');
  const renderChips = (arr, cls) => arr.map(i => `<div class="skill-chip ${cls}">${i.skill} ${i.score > 0 ? i.score+'%' : ''}</div>`).join('');
  document.getElementById('strongSkillsArea').innerHTML = strong.length ? renderChips(strong, 'assessed-good') : '<span style="color:var(--muted);font-size:0.85rem;">None yet</span>';
  document.getElementById('avgSkillsArea').innerHTML = average.length ? renderChips(average, 'assessed-warn') : '<span style="color:var(--muted);font-size:0.85rem;">None</span>';
  document.getElementById('weakSkillsArea').innerHTML = [...weak, ...missing].length ? renderChips([...weak, ...missing], 'assessed-bad') : '<span style="color:var(--good);font-size:0.85rem;">🎉 No weak skills!</span>';

  const labels = allRequired.slice(0, 8);
  const scores = labels.map(s => assessed[s] ? assessed[s].score : 0);
  renderRadarChart(labels, scores);

  document.getElementById('noResultsYet').style.display = 'none';
  document.getElementById('resultsContent').style.display = 'block';

  renderResources([...weak, ...missing, ...average]);

  checkAchievements(matchPct, strong.length + average.length + weak.length + missing.length);

  updateDashboard();
}

let radarChartInst = null;
function renderRadarChart(labels, scores) {
  const ctx = document.getElementById('radarChart').getContext('2d');
  if (radarChartInst) radarChartInst.destroy();
  radarChartInst = new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        label: 'Your Score',
        data: scores,
        backgroundColor: 'rgba(124,106,247,0.2)',
        borderColor: '#7c6af7',
        pointBackgroundColor: '#7c6af7',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0, max: 100,
          ticks: { stepSize: 25, color: '#7878a0', backdropColor: 'transparent' },
          grid: { color: '#2a2a3d' },
          pointLabels: { color: '#e8e8f0', font: { family: 'DM Sans', size: 11 } }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

let historyChartInst = null;
function renderHistoryChart() {
  const ctx = document.getElementById('historyChart').getContext('2d');
  if (historyChartInst) historyChartInst.destroy();
  const labels = state.reports.map((r, i) => `Report ${i+1}`);
  const scores = state.reports.map(r => r.score);
  historyChartInst = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.length ? labels : ['—'],
      datasets: [{
        label: 'Match Score',
        data: scores.length ? scores : [0],
        borderColor: '#7c6af7',
        backgroundColor: 'rgba(124,106,247,0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#7c6af7',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { min: 0, max: 100, ticks: { color: '#7878a0' }, grid: { color: '#2a2a3d' } },
        x: { ticks: { color: '#7878a0' }, grid: { color: '#2a2a3d' } }
      },
      plugins: { legend: { display: false } }
    }
  });
}

function renderResources(skills) {
  const list = document.getElementById('resourcesList');
  if (!skills.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">🏆</div>You\'re strong in all assessed skills!</div>';
    document.getElementById('noResourcesYet').style.display = 'none';
    document.getElementById('resourcesContent').style.display = 'block';
    return;
  }

  list.innerHTML = skills.map(({ skill, score }) => {
    const res = RESOURCES[skill] || DEFAULT_RESOURCES;
    const priority = score === 0 ? '🔴 Missing' : score < 45 ? '🔴 Weak' : '🟡 Needs Practice';
    const linksHtml = res.map(r => {
      const cls = r.type === 'free' ? 'rl-free' : r.type === 'paid' ? 'rl-paid' : 'rl-yt';
      const icon = r.type === 'free' ? '🆓' : r.type === 'paid' ? '💳' : '▶️';
      return `<a href="${r.url}" target="_blank" rel="noopener" class="resource-link ${cls}">${icon} ${r.name}</a>`;
    }).join('');
    return `<div class="resource-card">
      <div class="resource-skill">${skill} <span style="font-size:0.72rem;font-weight:400;color:var(--muted);">${priority}</span></div>
      <div class="resource-links">${linksHtml}</div>
    </div>`;
  }).join('');

  document.getElementById('noResourcesYet').style.display = 'none';
  document.getElementById('resourcesContent').style.display = 'block';
}
function saveReport() {
  if (!state.selectedRole) return;
  const role = ROLES[state.selectedRole];
  const allRequired = Object.values(role.skills).flat();
  const assessed = state.assessedSkills;
  const strong = Object.values(assessed).filter(s => s.score >= 75).length;
  const score = Math.round((strong / allRequired.length) * 100);
  const avgScore = Object.values(assessed).length > 0
    ? Math.round(Object.values(assessed).reduce((a, b) => a + b.score, 0) / Object.values(assessed).length)
    : 0;
  const date = new Date().toLocaleDateString();
  state.reports.push({ role: role.name, score, avgScore, date, skills: Object.keys(assessed).length });
  logActivity(`Saved report for ${role.name} — ${score}% match`);
  renderReportList();
  renderHistoryChart();
  alert('Report saved! View it in the Reports section.');
}

function renderReportList() {
  const list = document.getElementById('reportList');
  if (!state.reports.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div>No reports saved yet</div>';
    return;
  }
  list.innerHTML = state.reports.map((r, i) => `
    <div class="report-item">
      <div>
        <div style="font-weight:600;">${r.role}</div>
        <div style="font-size:0.75rem;color:var(--muted);">${r.date} · ${r.skills} skills assessed</div>
      </div>
      <div class="report-score">${r.score}%</div>
    </div>
  `).join('');
}

function downloadReport() {
  if (!state.reports.length) { alert('No reports saved yet!'); return; }
  const r = state.reports[state.reports.length - 1];
  const text = `SKILL GAP REPORT\n================\nRole: ${r.role}\nDate: ${r.date}\nMatch Score: ${r.score}%\nAvg Quiz Score: ${r.avgScore}%\nSkills Assessed: ${r.skills}`;
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'skill-gap-report.txt';
  a.click();
}

function clearReports() {
  if (confirm('Clear all reports?')) {
    state.reports = [];
    renderReportList();
    renderHistoryChart();
  }
}

function checkAchievements(matchPct, skillCount) {
  state.analyzedRoles.add(state.selectedRole);
  if (state.reports.length >= 0) unlockAchievement('ach-first');
  if (matchPct >= 50) unlockAchievement('ach-50');
  if (matchPct >= 80) unlockAchievement('ach-80');
  if (state.analyzedRoles.size >= 3) unlockAchievement('ach-3role');
  if (skillCount >= 10) unlockAchievement('ach-10skill');
  if (Object.values(state.assessedSkills).some(s => s.score === 100)) unlockAchievement('ach-perfect');
}

function unlockAchievement(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('locked'); el.classList.add('unlocked'); }
}

function logActivity(msg) {
  state.activityLog.unshift({ msg, time: new Date().toLocaleTimeString() });
  if (state.activityLog.length > 10) state.activityLog.pop();
  renderActivityLog();
}

function renderActivityLog() {
  const log = document.getElementById('activityLog');
  if (!state.activityLog.length) {
    log.innerHTML = '<div class="empty-state"><div class="empty-icon">💤</div>No activity yet</div>';
    return;
  }
  log.innerHTML = state.activityLog.map(a => `
    <div class="activity-item">
      <div class="activity-dot"></div>
      <div><div>${a.msg}</div><div style="font-size:0.72rem;opacity:0.6;">${a.time}</div></div>
    </div>
  `).join('');
}

function updateDashboard() {
  const assessedCount = Object.keys(state.assessedSkills).length;
  const avgScore = assessedCount > 0
    ? Math.round(Object.values(state.assessedSkills).reduce((a, b) => a + b.score, 0) / assessedCount)
    : 0;

  document.getElementById('dash-total').textContent = state.selectedSkills.size;
  document.getElementById('dash-assessed').textContent = assessedCount;
  document.getElementById('dash-score').textContent = assessedCount ? avgScore + '%' : '—';

  if (state.selectedRole) {
    const role = ROLES[state.selectedRole];
    const allRequired = Object.values(role.skills).flat();
    const strong = Object.values(state.assessedSkills).filter(s => s.score >= 75).length;
    const pct = Math.round((strong / allRequired.length) * 100);
    document.getElementById('dash-role').textContent = role.name;
    document.getElementById('dash-progress').style.width = pct + '%';
    document.getElementById('dash-pct').textContent = pct + '%';
  }
}
renderHistoryChart();
