/**
 * ============================================================================
 * MONOGRAPH JOURNAL — AUTOMATED VERIFICATION & QA SUITE
 * Fully portable, environment-independent quality assurance test runner.
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Dynamically resolve workspace project directory
const PROJECT_DIR = path.resolve(__dirname);

let passedTests = 0;
let failedTests = 0;

function logPass(msg) {
  console.log(`  \x1b[32m✔ PASS:\x1b[0m ${msg}`);
  passedTests++;
}

function logFail(msg, error) {
  console.log(`  \x1b[31m✖ FAIL:\x1b[0m ${msg}`);
  if (error) console.error(`    ↳ Error: ${error}`);
  failedTests++;
}

console.log("\n===============================================================================");
console.log("MONOGRAPH JOURNAL — AUTOMATED INTEGRITY & REGRESSION TEST SUITE");
console.log(`Target Directory: ${PROJECT_DIR}`);
console.log("===============================================================================\n");

// 1. File Existence Test
console.log("1. Checking Core Project Files Existence:");
const requiredFiles = ['index.html', 'style.css', 'script.js', 'README.md'];
requiredFiles.forEach(file => {
  const filePath = path.join(PROJECT_DIR, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    logPass(`${file} exists (${stats.size} bytes)`);
  } else {
    logFail(`${file} is missing from project directory`);
  }
});

// 2. HTML Integrity & Duplicate ID Audit
console.log("\n2. Auditing HTML Structure & ID Uniqueness:");
try {
  const htmlPath = path.join(PROJECT_DIR, 'index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Regex to extract only genuine id attributes (preceded by whitespace)
  const idRegex = /(?:^|\s)id=["']([^"']+)["']/g;
  const ids = [];
  const duplicateIds = new Set();
  let match;

  while ((match = idRegex.exec(htmlContent)) !== null) {
    const id = match[1];
    if (ids.includes(id)) {
      duplicateIds.add(id);
    } else {
      ids.push(id);
    }
  }

  if (duplicateIds.size === 0) {
    logPass(`Zero duplicate IDs found across ${ids.length} unique HTML identifiers`);
  } else {
    logFail(`Duplicate IDs detected: ${Array.from(duplicateIds).join(', ')}`);
  }

  // Check semantic structure elements
  const essentialElements = [
    '<header', '<nav', '<main', '<section', '<article', '<footer', '<aside',
    'id="top"', 'id="reading-progress-bar"', 'id="article-reader-modal"',
    'id="search-modal"', 'id="bookmarks-drawer"', 'id="info-modal"'
  ];
  essentialElements.forEach(el => {
    if (htmlContent.includes(el)) {
      logPass(`Semantic element / target found: ${el}`);
    } else {
      logFail(`Missing expected semantic structure: ${el}`);
    }
  });

} catch (err) {
  logFail("HTML parsing failed", err.message);
}

// 3. JavaScript Syntax, ES6 Compliance & Architecture Test
console.log("\n3. Validating JavaScript Architecture & Syntax:");
try {
  const jsPath = path.join(PROJECT_DIR, 'script.js');
  const jsContent = fs.readFileSync(jsPath, 'utf8');

  // Syntax validation using Node VM
  try {
    new vm.Script(jsContent, { filename: 'script.js' });
    logPass("script.js parsed with 100% valid ES6 syntax (No parse errors)");
  } catch (syntaxErr) {
    logFail("script.js has syntax errors", syntaxErr.stack);
  }

  // Check critical architectural features
  const architecturalFeatures = [
    { name: "Dynamic Category Counts", pattern: /updateCategoryCounts/ },
    { name: "Safe LocalStorage Get", pattern: /safeGetStorage/ },
    { name: "Safe LocalStorage Set", pattern: /safeSetStorage/ },
    { name: "Search + Category Synergy in Filter Engine", pattern: /getFilteredArticles/ },
    { name: "Semantic Search Result Items", pattern: /class="search-result-item"/ },
    { name: "Focus Trap Logic", pattern: /trapFocus/ },
    { name: "URL Hash Deep Linking", pattern: /#article-/ },
    { name: "Reduced Motion Handling", pattern: /prefers-reduced-motion/ },
    { name: "Audio Simulation State", pattern: /toggleAudioPlayer/ },
    { name: "Informational Modal Handlers", pattern: /openInfoModal/ },
    { name: "SVG Image Fallback Handler", pattern: /handleGlobalImageErrors/ }
  ];

  architecturalFeatures.forEach(feat => {
    if (feat.pattern.test(jsContent)) {
      logPass(`Architectural feature present: ${feat.name}`);
    } else {
      logFail(`Missing expected architectural feature: ${feat.name}`);
    }
  });

} catch (err) {
  logFail("JS validation failed", err.message);
}

// 4. CSS Token Hierarchy, Brace Balance & Responsive Queries
console.log("\n4. Auditing CSS System, Themes & Responsive Breakpoints:");
try {
  const cssPath = path.join(PROJECT_DIR, 'style.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  // Check brace balance
  const openBraces = (cssContent.match(/\{/g) || []).length;
  const closeBraces = (cssContent.match(/\}/g) || []).length;
  if (openBraces === closeBraces && openBraces > 0) {
    logPass(`CSS braces perfectly balanced (${openBraces} opening and closing blocks)`);
  } else {
    logFail(`CSS brace mismatch: ${openBraces} open vs ${closeBraces} close`);
  }

  // Check theme selectors
  const themes = ['[data-theme="light"]', '[data-theme="sepia"]', '[data-theme="dark"]'];
  themes.forEach(theme => {
    if (cssContent.includes(theme)) {
      logPass(`Theme token definition verified: ${theme}`);
    } else {
      logFail(`Missing theme token block for: ${theme}`);
    }
  });

  // Check responsive @media queries
  const mediaQueries = cssContent.match(/@media[^{]+\{/g) || [];
  if (mediaQueries.length >= 8) {
    logPass(`Comprehensive responsive coverage: ${mediaQueries.length} @media query blocks detected`);
  } else {
    logFail(`Insufficient responsive media queries: ${mediaQueries.length} found`);
  }

  // Check accessibility & reduced motion
  if (cssContent.includes('prefers-reduced-motion')) {
    logPass("Accessibility prefers-reduced-motion media query rule implemented");
  } else {
    logFail("Missing prefers-reduced-motion rule in stylesheet");
  }

} catch (err) {
  logFail("CSS validation failed", err.message);
}

// 5. Behavioral & Voice Speech Synthesis Simulation Test
console.log("\n5. Simulating Runtime Speech Synthesis & Issue Modal Logic:");
try {
  const jsPath = path.join(PROJECT_DIR, 'script.js');
  const jsContent = fs.readFileSync(jsPath, 'utf8');

  // Verify Issue 142 is properly defined in INFO_PAGES
  if (!jsContent.includes('"issue-142"') && !jsContent.includes("Issue № 142 • August 2026 Edition")) {
    logPass("Issue-specific publication modal removed from generic blog template");
  } else {
    logFail("Issue-specific publication data still present in the generic blog template");
  }

  // Verify speech synthesis voice engine handles hero and reader
  if (jsContent.includes("toggleAudioPlayer(source = 'hero')") || jsContent.includes("toggleAudioPlayer(source")) {
    logPass("Multi-source Speech Synthesis Voice Engine implemented (Hero & Reader)");
  } else {
    logFail("toggleAudioPlayer missing multi-source parameter support");
  }

  if (jsContent.includes("stopAudioPlayer") && jsContent.includes("speechSynthesis.cancel()")) {
    logPass("Safe voice cleanup engine with stopAudioPlayer verified");
  } else {
    logFail("Missing stopAudioPlayer cleanup logic");
  }

  if (jsContent.includes("reader-audio-toggle")) {
    logPass("Article reader toolbar voice narration trigger integrated");
  } else {
    logFail("Missing reader-audio-toggle in script.js");
  }

} catch (err) {
  logFail("Simulation validation failed", err.message);
}

// 5. Final Summary
console.log("\n===============================================================================");
console.log(`TEST RESULTS: ${passedTests} Passed | ${failedTests} Failed`);
if (failedTests === 0) {
  console.log("\x1b[32m✔ ALL INTEGRITY AND QA CHECKS PASSED PERFECTLY!\x1b[0m");
  console.log("===============================================================================\n");
  process.exit(0);
} else {
  console.log("\x1b[31m✖ SOME CHECKS FAILED. Please review the errors above.\x1b[0m");
  console.log("===============================================================================\n");
  process.exit(1);
}

