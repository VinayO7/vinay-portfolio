const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

  const themeOverlay = document.createElement("div");
  themeOverlay.id = "theme-transition";
  document.body.appendChild(themeOverlay);

  const savedTheme =
    localStorage.getItem("theme") || "dark";

  document.documentElement.setAttribute(
    "data-theme",
    savedTheme
  );

  updateIcon();

  themeToggle.addEventListener("click", () => {

    themeOverlay.classList.add("active");

    setTimeout(() => {

      const currentTheme =
        document.documentElement.getAttribute("data-theme");

      const nextTheme =
        currentTheme === "light"
          ? "dark"
          : "light";

      document.documentElement.setAttribute(
        "data-theme",
        nextTheme
      );

      localStorage.setItem(
        "theme",
        nextTheme
      );

      updateIcon();

    }, 280);

    setTimeout(() => {

      themeOverlay.classList.remove("active");

    }, 280);

  });

}

function updateIcon() {

  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  if (themeToggle) {
    themeToggle.textContent =
      currentTheme === "light"
        ? "☀️"
        : "🌙";
  }

  const oldIcon =
    document.getElementById("favicon");

  if (!oldIcon) return;

  const newIcon =
    document.createElement("link");

  newIcon.id = "favicon";
  newIcon.rel = "icon";

  newIcon.href =
    currentTheme === "light"
      ? "favicon-light.svg"
      : "favicon-dark.svg";

  document.head.removeChild(oldIcon);
  document.head.appendChild(newIcon);
}

// Counter animation
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + '+';
    }, 20);
  });
}



// Intersection observer for counters
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounters(); observer.disconnect(); } });
}, { threshold: 0.3 });
const metricsEl = document.getElementById('metrics');
if (metricsEl) observer.observe(metricsEl);

// Defect card toggle
function toggleDefect(card) {
  const wasOpen = card.classList.contains('open');
  document.querySelectorAll('.defect-card').forEach(c => c.classList.remove('open'));
  if (!wasOpen) card.classList.add('open');
}

// Bug report tabs
function switchBug(index, tab) {
  document.querySelectorAll('.bug-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.bug-content').forEach(c => c.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.bug-content')[index].classList.add('active');
}

// Scroll fade-in for sections
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
  });
}, { threshold: 0.1 });
document.querySelectorAll('section > *:not(.hero-grid-bg):not(.hero-glow)').forEach(el => {
  if (!el.classList.contains('fade-up')) {
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    sectionObserver.observe(el);
  }
});

const contactModal =
  document.getElementById("contact-modal");

const openContact =
  document.getElementById("open-contact");

if (openContact && contactModal) {
  openContact.addEventListener("click", (e) => {
    e.preventDefault();
    contactModal.classList.add("active");
  });
}

const closeContact =
document.getElementById("close-contact");

if(closeContact && contactModal){

  closeContact.addEventListener("click", () => {
    contactModal.classList.remove("active");
  });

  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove("active");
    }
  });

}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add("active");
    }

  });

});

const resumeModal=document.getElementById("resume-modal");
const openResume=document.getElementById("open-resume");
const closeResume=document.getElementById("close-resume");

if(resumeModal&&openResume&&closeResume){

openResume.addEventListener("click",(e)=>{
e.preventDefault();
resumeModal.classList.add("active");
});

closeResume.addEventListener("click",()=>{
resumeModal.classList.remove("active");
});

resumeModal.addEventListener("click",(e)=>{
if(e.target===resumeModal){
resumeModal.classList.remove("active");
}
});

}
const principleData = {

  1: {
    title: "Test Early",
    content: `
<p>
Quality starts long before execution begins. I believe defects identified during requirement reviews, design discussions, and planning stages are significantly cheaper and easier to fix than defects discovered after development or production deployment.
</p>

<ul>
<li>Review requirements for gaps and ambiguities</li>
<li>Identify risks before development starts</li>
<li>Discuss edge cases with stakeholders</li>
<li>Create test scenarios early in the SDLC</li>
<li>Reduce rework and project delays</li>
</ul>

<p>
Finding a defect before coding begins saves development effort, testing effort, and production support costs.
</p>
`
  },

  2: {
    title: "Verify Business Logic",
    content: `
<p>
A feature can be technically correct and still fail the business objective. My focus is not only verifying functionality but also ensuring the application follows the intended business rules and processes.
</p>

<ul>
<li>Validate calculations and workflows</li>
<li>Verify business rules and validations</li>
<li>Confirm expected outcomes with stakeholders</li>
<li>Test real-world usage scenarios</li>
<li>Ensure user requirements are fulfilled</li>
</ul>

<p>
Quality means delivering the right solution, not just a working solution.
</p>
`
  },

  3: {
    title: "Validate Data",
    content: `
<p>
Data is one of the most critical assets in any system. I ensure that information displayed in the UI matches backend records, database values, and API responses.
</p>

<ul>
<li>Database validation using SQL</li>
<li>Cross-check UI against backend data</li>
<li>Verify API response accuracy</li>
<li>Check data consistency across systems</li>
<li>Identify missing or corrupted records</li>
</ul>

<p>
Reliable applications depend on reliable data.
</p>
`
  },

  4: {
    title: "User Impact First",
    content: `
<p>
The true severity of a defect is determined by its impact on users and business operations. I prioritize issues based on risk, usability, customer experience, and business consequences.
</p>

<ul>
<li>Assess business impact</li>
<li>Understand customer pain points</li>
<li>Prioritize critical workflows</li>
<li>Evaluate production risks</li>
<li>Focus on real-world consequences</li>
</ul>

<p>
A minor technical issue can become a major business problem if it affects customers.
</p>
`
  },

  5: {
    title: "Automate Wisely",
    content: `
<p>
Automation should provide value, not simply increase script count. I focus on automating repetitive, stable, and high-value test scenarios while preserving manual exploratory testing for complex investigations.
</p>

<ul>
<li>Automate repetitive validations</li>
<li>Reduce manual effort</li>
<li>Improve test coverage</li>
<li>Increase execution speed</li>
<li>Maintain reliable automation suites</li>
</ul>

<p>
Automation supports quality; it does not replace critical thinking.
</p>
`
  },

  6: {
    title: "Prevent Regression",
    content: `
<p>
Every resolved defect represents a learning opportunity. Once a defect is fixed, I ensure it becomes part of future validation activities to prevent the same issue from reappearing.
</p>

<ul>
<li>Add regression test coverage</li>
<li>Retest impacted areas</li>
<li>Validate related functionality</li>
<li>Monitor recurring defects</li>
<li>Strengthen release confidence</li>
</ul>

<p>
A bug fixed today should never become tomorrow's production issue.
</p>
`
  },

  7: {
    title: "Document Clearly",
    content: `
<p>
A defect report is only valuable if developers, analysts, and stakeholders can understand and reproduce the issue quickly. Clear documentation speeds up resolution and reduces communication gaps.
</p>

<ul>
<li>Provide clear reproduction steps</li>
<li>Include expected vs actual results</li>
<li>Attach supporting evidence</li>
<li>Specify environment details</li>
<li>Communicate impact effectively</li>
</ul>

<p>
Well-written documentation improves collaboration and accelerates defect resolution.
</p>
`
  }

};

const principleModal =
  document.getElementById("principle-modal");

function openPrinciple(id) {

  document.getElementById(
    "principle-title"
  ).innerHTML =
    principleData[id].title;

  document.getElementById(
    "principle-content"
  ).innerHTML =
    principleData[id].content;

  principleModal.classList.add(
    "active"
  );
}

const closePrinciple=document.getElementById("close-principle");

if(closePrinciple&&principleModal){

closePrinciple.addEventListener("click",()=>{
principleModal.classList.remove("active");
});

principleModal.addEventListener("click",(e)=>{
if(e.target===principleModal){
principleModal.classList.remove("active");
}
});

}

const toolData = {

  1: {
    title: "Selenium WebDriver",
    content: `
<div class="tool-rating">★★★★☆ Intermediate</div>

<div class="tool-section">
<h4>What I Use It For</h4>
<ul>
<li>Web Automation Testing</li>
<li>Regression Testing</li>
<li>UI Validation</li>
<li>Functional Testing</li>
</ul>
</div>

<div class="tool-section">
<h4>Hands-on Experience</h4>
<ul>
<li>Created Selenium test scripts</li>
<li>Worked with XPath and CSS Selectors</li>
<li>Implemented Wait Strategies</li>
<li>Used TestNG for execution</li>
</ul>
</div>

<div class="tool-section">
<h4>Current Learning</h4>
<ul>
<li>Framework Architecture</li>
<li>Page Object Model</li>
<li>Reporting Integration</li>
</ul>
</div>
`
  },

  2: {
    title: "Manual Testing",
    content: `
<div class="tool-rating">★★★★★ Advanced</div>

<div class="tool-section">
<h4>Core Activities</h4>
<ul>
<li>Functional Testing</li>
<li>Regression Testing</li>
<li>Smoke Testing</li>
<li>Exploratory Testing</li>
</ul>
</div>

<div class="tool-section">
<h4>Experience</h4>
<ul>
<li>Test Case Design</li>
<li>Defect Reporting</li>
<li>Requirement Analysis</li>
<li>Root Cause Investigation</li>
</ul>
</div>
`
  },

  3: {
    title: "SQL",
    content: `
<div class="tool-rating">★★★★☆ Intermediate</div>

<div class="tool-section">
<h4>Database Validation</h4>
<ul>
<li>Data Verification</li>
<li>Backend Validation</li>
<li>Record Comparison</li>
<li>Business Data Analysis</li>
</ul>
</div>

<div class="tool-section">
<h4>Skills</h4>
<ul>
<li>SELECT</li>
<li>WHERE</li>
<li>JOIN</li>
<li>GROUP BY</li>
<li>ORDER BY</li>
</ul>
</div>
`
  },

  4: {
    title: "Postman",
    content: `
<div class="tool-rating">★★★★☆ Intermediate</div>

<div class="tool-section">
<h4>API Testing</h4>
<ul>
<li>Status Code Validation</li>
<li>Response Verification</li>
<li>Schema Validation</li>
<li>Environment Variables</li>
</ul>
</div>

<div class="tool-section">
<h4>Experience</h4>
<ul>
<li>REST API Testing</li>
<li>Collection Execution</li>
<li>Request Chaining</li>
<li>Regression Validation</li>
</ul>
</div>
`
  },

  5: {
    title: "Core Java",
    content: `
<div class="tool-rating">★★★☆☆ Intermediate</div>

<div class="tool-section">
<h4>Programming Concepts</h4>
<ul>
<li>OOP Concepts</li>
<li>Collections Framework</li>
<li>Exception Handling</li>
<li>Methods & Classes</li>
</ul>
</div>

<div class="tool-section">
<h4>Usage</h4>
<ul>
<li>Selenium Automation</li>
<li>Basic Utility Programs</li>
<li>Test Script Development</li>
</ul>
</div>
`
  }

};

const toolModal =
  document.getElementById("tool-modal");

function openTool(id) {
  document.getElementById("tool-title")
    .innerHTML = toolData[id].title;
  document.getElementById("tool-content")
    .innerHTML = toolData[id].content;
  toolModal.classList.add("active");
}

const closeTool=document.getElementById("close-tool");

if(closeTool&&toolModal){

closeTool.addEventListener("click",()=>{
toolModal.classList.remove("active");
});

toolModal.addEventListener("click",(e)=>{
if(e.target===toolModal){
toolModal.classList.remove("active");
}
});

}

const razorpayApiBase = "/.netlify/functions";
const razorpayOrderMinimumPaise = 4900;

function updatePaymentStatus(message, isError = false) {
  const statusEl = document.getElementById("payment-status");
  if (statusEl) {
    statusEl.textContent = message;
    statusEl.style.color = isError ? "#ff6b35" : "#00e5a0";
  }
}

async function createOrder(amountPaise = razorpayOrderMinimumPaise) {
  if (amountPaise < razorpayOrderMinimumPaise) {
    throw new Error("Minimum amount is ₹1 (100 paise).");
  }

  const response = await fetch(`${razorpayApiBase}/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: amountPaise,
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    })
  });

  if (response.status === 401) {
    throw new Error("Authentication failed while creating Razorpay order.");
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Order creation failed: ${errorText || response.statusText}`);
  }

  return await response.json();
}

async function verifyPayment(paymentId, orderId, signature) {
  const response = await fetch(`${razorpayApiBase}/verify-payment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      razorpay_payment_id: paymentId,
      razorpay_order_id: orderId,
      razorpay_signature: signature
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Verification failed: ${errorText || response.statusText}`);
  }

  return await response.json();
}

function openRazorpayModal(order) {

  const publicKey = "rzp_test_Svu9aJQFAwzoXF";

  const options = {

    key: publicKey,
    amount: order.amount,
    currency: order.currency,
    order_id: order.order_id,

    name: "Vinay Nalavade",

    description:
      "Core Java Notes",

    handler: async function (response) {

      console.log(
        "RAZORPAY RESPONSE:",
        response
      );

      try {

        updatePaymentStatus(
          "Verifying payment..."
        );

        const verification =
          await verifyPayment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          );

        if (verification.success) {

          sessionStorage.setItem(
            "payment_verified",
            "true"
          );

          sessionStorage.setItem(
            "payment_id",
            response.razorpay_payment_id
          );

          sessionStorage.setItem(
            "order_id",
            response.razorpay_order_id
          );

          updatePaymentStatus(
            "Payment verified successfully. Redirecting..."
          );

          window.location.href =
            "customer-details.html";

        } else {

          updatePaymentStatus(
            "Payment verification failed.",
            true
          );

        }

      } catch (error) {

        console.error(
          "Payment verification error:",
          error
        );

        updatePaymentStatus(
          error.message ||
          "Payment verification failed.",
          true
        );

      }

    },

    modal: {

      ondismiss: function () {

        updatePaymentStatus(
          "Payment cancelled.",
          true
        );

      }

    },

    prefill: {
      name: "",
      email: "",
      contact: ""
    },

    readonly: {
      name: false,
      email: false,
      contact: false
    },

    theme: {
      color: "#00e5a0"
    }

  };

  const razorpay =
    new Razorpay(options);

  razorpay.on(
    "payment.failed",
    function (response) {

      updatePaymentStatus(
        response.error.description ||
        "Payment failed.",
        true
      );

    }
  );

  razorpay.open();

}

async function handleCheckoutButton() {
  try {
    updatePaymentStatus("Creating order...");
    const order = await createOrder(razorpayOrderMinimumPaise);
    openRazorpayModal(order);
  } catch (error) {
    console.error("Checkout error:", error);
    updatePaymentStatus(error.message || "Unable to create payment order.", true);
  }
}

  document.addEventListener("DOMContentLoaded", () => {
    const checkoutButton = document.getElementById("checkout-button");
    if (checkoutButton) {
      checkoutButton.addEventListener("click", handleCheckoutButton);
    }

    const modal = document.getElementById("previewModal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-modal");
    const previewCards = document.querySelectorAll(".preview-card");
    console.log("Modal:", modal);
    console.log("Modal Image:", modalImage);
    console.log("Cards Found:", previewCards.length);
    if (!modal || !modalImage || !closeBtn || !previewCards.length) {
      console.log("Preview modal setup failed");
      return;
    }
    previewCards.forEach(card => {
      card.addEventListener("click", () => {
        console.log("Card Clicked");
        const img = card.querySelector("img");
        console.log("Image:", img);
        console.log("Image Src:", img.src);
        modalImage.src = img.src;
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function (e) {

        if (this.target === '_blank') return;

        e.preventDefault();

        document.body.classList.add('page-exit');

        setTimeout(() => {
            window.location.href = this.href;
        }, 250);
    });
});

const frameworkData = {
    testng: {
    title: "🧪 TestNG Test Execution",

    content: `

            <div class="framework-block">
                <h4>Purpose</h4>

                <p>
                    TestNG is the execution engine of my automation framework.
                    It controls test execution, manages test lifecycle events,
                    performs validations and generates execution reports.
                </p>
            </div>

            <div class="framework-block">
                <h4>How I Implemented It</h4>

                <ul>
                    <li>Used @Test annotations to execute test scenarios.</li>
                    <li>Used @BeforeMethod for test setup activities.</li>
                    <li>Used @AfterMethod for browser cleanup and teardown.</li>
                    <li>Integrated TestNG assertions for validation.</li>
                    <li>Managed execution flow through BaseTest inheritance.</li>
                    <li>Executed multiple test classes under a common framework structure.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Framework Files</h4>

                <ul>
                    <li>LaunchTest.java</li>
                    <li>AddEmployeeTest.java</li>
                    <li>EmployeePersonalDetailsTest.java</li>
                    <li>BaseTest.java</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Execution Flow</h4>

                <p>
                    Test execution starts from a TestNG test class.
                    TestNG invokes BaseTest setup methods,
                    initializes WebDriver through DriverFactory,
                    executes Page Object methods,
                    performs assertions and finally generates execution results.
                </p>
            </div>

            <div class="framework-block">
                <h4>Why I Chose TestNG</h4>

                <p>
                    I selected TestNG because it provides powerful annotations,
                    flexible test execution control, assertion support,
                    dependency management and reporting capabilities.
                    These features make the framework scalable and maintainable
                    for real-world automation projects.
                </p>
            </div>

            <div class="framework-block">
                <h4>Interview Talking Points</h4>

                <ul>
                    <li>Execution engine of the entire framework.</li>
                    <li>Supports annotations, grouping and prioritization.</li>
                    <li>Provides built-in assertion mechanisms.</li>
                    <li>Easy integration with reporting tools.</li>
                    <li>Suitable for scalable Page Object Model frameworks.</li>
                </ul>
            </div>

        `
    },
    basetest: {
    title: "🏗 BaseTest",

    content: `

            <div class="framework-block">
                <h4>Purpose</h4>

                <p>
                    BaseTest acts as the foundation of the framework.
                    Every test class inherits common setup and teardown
                    functionality from this layer, ensuring consistency
                    across all automated tests.
                </p>
            </div>

            <div class="framework-block">
                <h4>How I Implemented It</h4>

                <ul>
                    <li>Created a reusable parent class for all test classes.</li>
                    <li>Loaded framework configuration before execution.</li>
                    <li>Initialized WebDriver through DriverFactory.</li>
                    <li>Launched the application URL automatically.</li>
                    <li>Handled browser cleanup after execution.</li>
                    <li>Reduced duplicate code across test classes.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Framework Files</h4>

                <ul>
                    <li>BaseTest.java</li>
                    <li>AuthenticatedBaseTest.java</li>
                    <li>ConfigReader.java</li>
                    <li>DriverFactory.java</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Execution Flow</h4>

                <p>
                    When a TestNG test starts, execution first enters BaseTest.
                    BaseTest loads configuration values, creates a WebDriver
                    instance through DriverFactory, launches the application,
                    and prepares the environment before the test logic begins.
                </p>
            </div>

            <div class="framework-block">
                <h4>Responsibilities</h4>

                <ul>
                    <li>Framework initialization.</li>
                    <li>Browser startup.</li>
                    <li>Configuration management.</li>
                    <li>Driver lifecycle management.</li>
                    <li>Common setup and teardown activities.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Why I Added BaseTest</h4>

                <p>
                    Without BaseTest, every test class would contain duplicate
                    browser setup and cleanup code. By centralizing these
                    responsibilities, the framework becomes cleaner,
                    easier to maintain and more scalable as new tests are added.
                </p>
            </div>

            <div class="framework-block">
                <h4>Interview Talking Points</h4>

                <ul>
                    <li>Acts as the parent class for all test classes.</li>
                    <li>Provides framework-level setup and teardown.</li>
                    <li>Supports code reusability and maintainability.</li>
                    <li>Centralizes browser and configuration management.</li>
                    <li>Reduces duplication across automation scripts.</li>
                </ul>
            </div>

        `
    },
    driverfactory: {
    title: "🚗 DriverFactory",

    content: `

            <div class="framework-block">
                <h4>Purpose</h4>

                <p>
                    DriverFactory is responsible for creating and managing
                    WebDriver instances. It centralizes browser initialization
                    logic and ensures that browser setup is maintained in a
                    single location within the framework.
                </p>
            </div>

            <div class="framework-block">
                <h4>How I Implemented It</h4>

                <ul>
                    <li>Created a dedicated DriverFactory class.</li>
                    <li>Initialized ChromeDriver from a central location.</li>
                    <li>Configured browser startup settings.</li>
                    <li>Managed browser window initialization.</li>
                    <li>Returned WebDriver instances to BaseTest.</li>
                    <li>Separated browser creation from test logic.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Framework Files</h4>

                <ul>
                    <li>DriverFactory.java</li>
                    <li>BaseTest.java</li>
                    <li>AuthenticatedBaseTest.java</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Execution Flow</h4>

                <p>
                    During test execution, BaseTest requests a browser instance.
                    DriverFactory creates and configures the WebDriver,
                    returns it to BaseTest, and the driver is then used
                    throughout the Page Object layer.
                </p>
            </div>

            <div class="framework-block">
                <h4>Why Not Create ChromeDriver Directly In BaseTest?</h4>

                <p>
                    Creating WebDriver directly inside BaseTest tightly couples
                    browser creation with test initialization. DriverFactory
                    follows the Single Responsibility Principle by keeping
                    browser management separate from test setup logic.
                </p>
            </div>

            <div class="framework-block">
                <h4>Scalability Benefits</h4>

                <ul>
                    <li>Easy to add Firefox, Edge or RemoteWebDriver support.</li>
                    <li>Supports future Selenium Grid integration.</li>
                    <li>Centralized browser configuration.</li>
                    <li>Reduces maintenance effort.</li>
                    <li>Improves framework extensibility.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Interview Talking Points</h4>

                <ul>
                    <li>Centralized WebDriver management layer.</li>
                    <li>Follows Single Responsibility Principle.</li>
                    <li>Improves maintainability and scalability.</li>
                    <li>Supports future multi-browser execution.</li>
                    <li>Keeps BaseTest clean and focused on test setup.</li>
                </ul>
            </div>

        `
    },
    pageobjects: {
    title: "📄 Page Object Model (POM)",

    content: `

            <div class="framework-block">
                <h4>Purpose</h4>

                <p>
                    The Page Object Model (POM) layer separates page interactions
                    from test logic. Each application page is represented by a
                    dedicated Java class containing locators and reusable actions.
                </p>
            </div>

            <div class="framework-block">
                <h4>How I Implemented It</h4>

                <ul>
                    <li>Created separate page classes for each application page.</li>
                    <li>Stored element locators inside page classes.</li>
                    <li>Encapsulated user actions into reusable methods.</li>
                    <li>Kept test classes free from locator definitions.</li>
                    <li>Inherited common functionality through BasePage.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Framework Files</h4>

                <ul>
                    <li>BasePage.java</li>
                    <li>LoginPage.java</li>
                    <li>DashboardPage.java</li>
                    <li>PIMPage.java</li>
                    <li>AddEmployeePage.java</li>
                    <li>EmployeeDetailsPage.java</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Execution Flow</h4>

                <p>
                    Test classes never interact with locators directly.
                    A test calls a Page Object method, the Page Object performs
                    Selenium actions through BasePage methods, and returns control
                    back to the test.
                </p>
            </div>

            <div class="framework-block">
                <h4>Example From My Framework</h4>

                <p>
                    During employee creation, AddEmployeeTest calls methods from
                    AddEmployeePage. The page class handles element identification,
                    form filling and button clicks, while the test focuses only on
                    business validation.
                </p>
            </div>

            <div class="framework-block">
                <h4>Benefits Achieved</h4>

                <ul>
                    <li>Improved code readability.</li>
                    <li>Reduced locator duplication.</li>
                    <li>Easier maintenance when UI changes.</li>
                    <li>Better reusability of page actions.</li>
                    <li>Cleaner and more scalable framework structure.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Why BasePage Exists?</h4>

                <p>
                    BasePage contains common Selenium operations such as click(),
                    type(), getText() and waits. This prevents duplicate code
                    across all page classes and keeps page objects focused on
                    business-specific actions.
                </p>
            </div>

            <div class="framework-block">
                <h4>Interview Talking Points</h4>

                <ul>
                    <li>Follows Page Object Model design pattern.</li>
                    <li>Separates test logic from UI interaction logic.</li>
                    <li>Improves maintainability and scalability.</li>
                    <li>Uses BasePage for reusable Selenium actions.</li>
                    <li>Reduces impact of UI changes on test scripts.</li>
                </ul>
            </div>

        `
    },
    webdriver: {
    title: "🖱 WebDriver Actions",

    content: `

            <div class="framework-block">
                <h4>Purpose</h4>

                <p>
                    WebDriver Actions form the interaction layer of the framework.
                    Instead of writing Selenium commands directly inside test classes,
                    all browser interactions are encapsulated into reusable methods.
                </p>
            </div>

            <div class="framework-block">
                <h4>How I Implemented It</h4>

                <ul>
                    <li>Centralized Selenium interactions inside BasePage.</li>
                    <li>Created reusable click(), type() and utility methods.</li>
                    <li>Separated browser actions from business test logic.</li>
                    <li>Reduced duplicate Selenium code across page classes.</li>
                    <li>Used explicit waits before interacting with elements.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Framework Files</h4>

                <ul>
                    <li>BasePage.java</li>
                    <li>WaitUtil.java</li>
                    <li>LoginPage.java</li>
                    <li>DashboardPage.java</li>
                    <li>AddEmployeePage.java</li>
                    <li>EmployeeDetailsPage.java</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Execution Flow</h4>

                <p>
                    When a test invokes a Page Object method, the Page Object
                    internally calls reusable BasePage methods. These methods
                    execute Selenium WebDriver commands such as clicking,
                    typing, waiting and retrieving values from the application.
                </p>
            </div>

            <div class="framework-block">
                <h4>Example From My Framework</h4>

                <p>
                    While creating an employee, AddEmployeePage does not directly
                    contain large Selenium scripts. Instead, it calls reusable
                    BasePage methods such as type() and click() which internally
                    execute WebDriver actions.
                </p>
            </div>

            <div class="framework-block">
                <h4>Why I Used This Approach</h4>

                <p>
                    Direct WebDriver usage inside every page and test class leads
                    to code duplication and difficult maintenance. By centralizing
                    browser actions in BasePage, the framework becomes cleaner,
                    reusable and easier to scale.
                </p>
            </div>

            <div class="framework-block">
                <h4>Common Actions Used</h4>

                <ul>
                    <li>click()</li>
                    <li>type()</li>
                    <li>getText()</li>
                    <li>clear()</li>
                    <li>findElement()</li>
                    <li>Explicit Waits</li>
                    <li>Page Navigation</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Interview Talking Points</h4>

                <ul>
                    <li>Acts as the browser interaction layer.</li>
                    <li>Implemented through reusable BasePage methods.</li>
                    <li>Reduces code duplication across page objects.</li>
                    <li>Improves maintainability and readability.</li>
                    <li>Supports future framework scaling and enhancements.</li>
                </ul>
            </div>

        `
    },
    assertions: {
    title: "✅ Assertions & Validation Layer",

    content: `

            <div class="framework-block">
                <h4>Purpose</h4>

                <p>
                    Assertions are responsible for validating application behavior.
                    They compare actual results with expected results and determine
                    whether a test case passes or fails.
                </p>
            </div>

            <div class="framework-block">
                <h4>How I Implemented It</h4>

                <ul>
                    <li>Used TestNG Assert class for validations.</li>
                    <li>Verified page titles and page navigation.</li>
                    <li>Validated employee creation workflows.</li>
                    <li>Confirmed successful execution of business scenarios.</li>
                    <li>Used assertions to determine test pass/fail status.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Framework Files</h4>

                <ul>
                    <li>LaunchTest.java</li>
                    <li>AddEmployeeTest.java</li>
                    <li>EmployeePersonalDetailsTest.java</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Execution Flow</h4>

                <p>
                    After page actions are completed, assertions validate whether
                    the application reached the expected state. If validation is
                    successful, the test passes. If validation fails, TestNG marks
                    the test as failed and records the failure in execution results.
                </p>
            </div>

            <div class="framework-block">
                <h4>Example From My Framework</h4>

                <p>
                    After performing user actions such as employee creation or
                    personal details updates, assertions verify that the expected
                    page, data or application state is displayed before the test
                    is marked as successful.
                </p>
            </div>

            <div class="framework-block">
                <h4>Why Assertions Are Important</h4>

                <p>
                    Without assertions, Selenium would only perform browser actions
                    without verifying outcomes. Assertions transform automation
                    scripts into actual test cases by validating business
                    requirements and expected results.
                </p>
            </div>

            <div class="framework-block">
                <h4>Common Assertion Types</h4>

                <ul>
                    <li>Assert.assertEquals()</li>
                    <li>Assert.assertTrue()</li>
                    <li>Assert.assertFalse()</li>
                    <li>Page Validation Checks</li>
                    <li>Text Verification</li>
                    <li>Element Visibility Verification</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Interview Talking Points</h4>

                <ul>
                    <li>Assertions determine test success or failure.</li>
                    <li>Implemented using TestNG Assert class.</li>
                    <li>Used for business validation, not browser actions.</li>
                    <li>Separate verification logic from interaction logic.</li>
                    <li>Critical component of every automation framework.</li>
                </ul>
            </div>

        `
    },
    results: {
    title: "📊 Results & Reporting",

    content: `

            <div class="framework-block">
                <h4>Purpose</h4>

                <p>
                    The Results layer provides the final outcome of test execution.
                    It captures pass/fail status, execution summaries and failure
                    details, allowing testers to quickly assess application quality.
                </p>
            </div>

            <div class="framework-block">
                <h4>How I Implemented It</h4>

                <ul>
                    <li>Used TestNG execution reports.</li>
                    <li>Captured pass and fail status for each test case.</li>
                    <li>Reviewed execution summaries after every run.</li>
                    <li>Used assertion results to determine final outcomes.</li>
                    <li>Tracked failures for debugging and analysis.</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Framework Files</h4>

                <ul>
                    <li>LaunchTest.java</li>
                    <li>AddEmployeeTest.java</li>
                    <li>EmployeePersonalDetailsTest.java</li>
                    <li>test-output/ (Generated TestNG Reports)</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Execution Flow</h4>

                <p>
                    After all test steps and assertions are completed, TestNG
                    generates execution results. These results contain the
                    overall execution summary, test status and failure details,
                    providing visibility into framework execution.
                </p>
            </div>

            <div class="framework-block">
                <h4>What Gets Reported?</h4>

                <ul>
                    <li>Passed Test Cases</li>
                    <li>Failed Test Cases</li>
                    <li>Skipped Test Cases</li>
                    <li>Execution Duration</li>
                    <li>Failure Stack Traces</li>
                    <li>Execution Summary</li>
                </ul>
            </div>

            <div class="framework-block">
                <h4>Current Framework Status</h4>

                <p>
                    The framework currently uses TestNG's built-in reporting
                    mechanism. As the framework evolves, reporting can be enhanced
                    further by integrating tools such as Extent Reports,
                    Allure Reports or CI/CD dashboards.
                </p>
            </div>

            <div class="framework-block">
                <h4>Why Reporting Matters</h4>

                <p>
                    Automation execution is valuable only when results are easy
                    to understand. Reporting provides visibility into test health,
                    identifies failures quickly and helps teams make informed
                    release decisions.
                </p>
            </div>

            <div class="framework-block">
                <h4>Interview Talking Points</h4>

                <ul>
                    <li>Final stage of the framework lifecycle.</li>
                    <li>Driven by TestNG execution reports.</li>
                    <li>Displays pass, fail and skipped test counts.</li>
                    <li>Supports debugging through failure details.</li>
                    <li>Can be extended with Extent Reports and Allure Reports.</li>
                </ul>
            </div>

        `
    }
};

function openFramework(type) {

    const frameworkModal =
        document.getElementById("framework-modal");

    const frameworkTitle =
        document.getElementById("framework-title");

    const frameworkContent =
        document.getElementById("framework-content");

    if (!frameworkModal ||
        !frameworkTitle ||
        !frameworkContent) {
        return;
    }

    frameworkTitle.innerHTML =
        frameworkData[type].title;

    frameworkContent.innerHTML =
        frameworkData[type].content;

    frameworkModal.classList.add("active");
}

function closeFramework() {

    const frameworkModal =
        document.getElementById("framework-modal");

    if(frameworkModal){
        frameworkModal.classList.remove("active");
    }
}

document.addEventListener("click", function(e){

    if(e.target.id==="close-framework"){
        closeFramework();
    }

    if(e.target.id==="framework-modal"){
        closeFramework();
    }

});