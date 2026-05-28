// ============================================
//   A Love Letter Written in Code
//   Author: Troy
//   Dedicated to: Naomie ❤️
// ============================================

const troy = {
  name: "Troy",
  role: "DevOps Engineer in Training",
  heartStatus: "Fully Deployed",
};

const naomie = {
  name: "Naomie",
  role: "DevOps Engineer",
  superpower: "Making Troy's world run smoothly",
};

function myFeelings() {
  return [
    "You are not just my girlfriend,",
    "You are my Senior DevOps Engineer of Life.",
    "You keep my heart running with zero downtime.",
    "You auto-heal me when I am broken.",
    "You scale me up when I am at my lowest.",
    "You monitor me and know when something is wrong",
    "even before I say a word.",
    "Every commit I make is dedicated to you.",
    "Every pipeline I build runs in your honour.",
    "If love were a GitHub repo,",
    "you would be the main branch —",
    "stable, beautiful, and everything merges into you.",
    "I am just a beginner in DevOps,",
    "but I am an expert at loving you.",
  ];
}

function deploy() {
  console.log("========================================");
  console.log("   DEPLOYING LOVE TO PRODUCTION...      ");
  console.log("========================================");
  console.log("");

  myFeelings().forEach((line) => {
    console.log("  💙 " + line);
  });

  console.log("");
  console.log("========================================");
  console.log(`  From: ${troy.name} (${troy.role})`);
  console.log(`  To:   ${naomie.name} (${naomie.superpower})`);
  console.log("  Status: LOVE SUCCESSFULLY DEPLOYED ✅ ");
  console.log("  Uptime: Forever Yours ♾️                    ");
  console.log("========================================");
}

deploy();