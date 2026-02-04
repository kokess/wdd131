// Product array (for display purposes)
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Get product name from ID
function getProductName(productId) {
    const product = products.find(p => p.id === productId);
    return product ? product.name : productId;
}

// Format rating with stars
function formatRating(rating) {
    const stars = "☆".repeat(parseInt(rating));
    return `${stars} (${rating} out of 5)`;
}

// Update review counter in localStorage
function updateReviewCounter() {
    let reviewCount = localStorage.getItem("reviewCount");

    if (reviewCount === null) {
        reviewCount = 1;
    } else {
        reviewCount = parseInt(reviewCount) + 1;
    }

    localStorage.setItem("reviewCount", reviewCount);

    const counterElement = document.querySelector("#reviewCount");
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
}

// Display review details from URL parameters
function displayReviewDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const reviewDetails = document.querySelector("#reviewDetails");

    if (!reviewDetails) return;

    let html = "";

    // Product Name
    const productId = urlParams.get("productName");
    if (productId) {
        const productName = getProductName(productId);
        html += `<p><strong>Product:</strong> ${productName}</p>`;
    }

    // Rating
    const rating = urlParams.get("rating");
    if (rating) {
        html += `<p><strong>Rating:</strong> ${formatRating(rating)}</p>`;
    }

    // Installation Date
    const installDate = urlParams.get("installDate");
    if (installDate) {
        const formattedDate = new Date(installDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        html += `<p><strong>Installation Date:</strong> ${formattedDate}</p>`;
    }

    // Features
    const features = urlParams.getAll("features");
    if (features.length > 0) {
        html += `<p><strong>Useful Features:</strong> ${features.join(", ")}</p>`;
    }

    // Written Review
    const writtenReview = urlParams.get("writtenReview");
    if (writtenReview && writtenReview.trim() !== "") {
        html += `<p><strong>Written Review:</strong> ${writtenReview}</p>`;
    }

    // User Name
    const userName = urlParams.get("userName");
    if (userName && userName.trim() !== "") {
        html += `<p><strong>Reviewed by:</strong> ${userName}</p>`;
    }

    reviewDetails.innerHTML = html;
}

// Update footer dates
function updateFooter() {
    const yearSpan = document.querySelector("#year");
    const lastModifiedSpan = document.querySelector("#lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    updateReviewCounter();
    displayReviewDetails();
    updateFooter();
});