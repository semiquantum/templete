// SaaS Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Feature Walkthrough Tabs
    const featTabs = document.querySelectorAll('.feat-tab');
    const featTitle = document.getElementById('featTitle');
    const featDesc = document.getElementById('featDesc');

    const featureData = {
        'analytics': {
            title: 'Predictive Real-Time Analytics',
            desc: 'Synthetix continuously monitors pipeline health, detects code anomalies, and forecasts delivery bottlenecks before they impact production.'
        },
        'auto': {
            title: 'Autonomous Workflow Pipelines',
            desc: 'Trigger automated CI/CD builds, environment provisioning, and automated code review checks with zero manual intervention.'
        },
        'team': {
            title: 'Real-Time Team Collaboration',
            desc: 'Share live workspace state, assign automated tasks across engineering pods, and sync status updates directly into Slack and Notion.'
        }
    };

    featTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            featTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const fKey = tab.getAttribute('data-feat');
            const data = featureData[fKey];

            if (data && featTitle && featDesc) {
                featTitle.textContent = data.title;
                featDesc.textContent = data.desc;
            }
        });
    });

    // 3. ROI Savings Calculator
    const teamSize = document.getElementById('teamSize');
    const teamVal = document.getElementById('teamVal');
    const roiHours = document.getElementById('roiHours');
    const roiCost = document.getElementById('roiCost');

    if (teamSize) {
        teamSize.addEventListener('input', () => {
            const val = parseInt(teamSize.value, 10);
            teamVal.textContent = val;

            const hours = val * 20; // 20 hrs saved per person/mo
            const savings = hours * 75; // $75/hr engineer rate

            if (roiHours && roiCost) {
                roiHours.textContent = hours.toLocaleString() + " hrs";
                roiCost.textContent = "$" + savings.toLocaleString();
            }
        });
    }

    // 4. Monthly / Annual Pricing Toggle
    const pricingSwitch = document.getElementById('pricingSwitch');
    const priceVals = document.querySelectorAll('.price-val');

    if (pricingSwitch) {
        pricingSwitch.addEventListener('change', () => {
            const isAnnual = pricingSwitch.checked;

            priceVals.forEach(val => {
                const mPrice = val.getAttribute('data-monthly');
                const aPrice = val.getAttribute('data-annual');

                val.textContent = isAnnual ? "$" + aPrice : "$" + mPrice;
            });
        });
    }

    // 5. Free Trial Form Submission
    const trialForm = document.getElementById('trialForm');
    const trialStatus = document.getElementById('trialStatus');

    if (trialForm && trialStatus) {
        trialForm.addEventListener('submit', (e) => {
            e.preventDefault();
            trialStatus.textContent = '✓ 14-Day Free Trial activated! Check your inbox for account setup instructions.';
            trialForm.reset();
        });
    }

    // 6. Back to Top Button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
