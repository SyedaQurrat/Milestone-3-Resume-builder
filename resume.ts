// Function to handle file input and preview image
document.getElementById('fileInput')?.addEventListener('change', function(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e: ProgressEvent<FileReader>) {
            const previewDiv = document.getElementById('imagePreview') as HTMLDivElement;
            if (previewDiv) {
                // Set the uploaded image as background
                previewDiv.style.backgroundImage = `url('${e.target?.result}')`;
                previewDiv.style.backgroundSize = 'cover';
                previewDiv.style.backgroundPosition = 'center';
                
                // Clear the text "This will remove any inner text or elements
                previewDiv.innerHTML = "";
            }
        };
        reader.readAsDataURL(file);
    }
});

// Function to change container background color
function changeColor(): void {
    // List of random colors
    const colors: string[] = ['#9d9d9d', '#707f83', '#a5b5b0', '#b7ced8', '#e3e9ee', '#f0d0db', '#ececec', '#efefef', '#e1d8db', '#d4cbc'];

    // Random index generate karna colors array se ek random color select karne ke liye
    const randomIndex: number = Math.floor(Math.random() * colors.length);

    // Container element ka background color change karna
    const container = document.querySelector('.container') as HTMLElement;
    if (container) {
        container.style.backgroundColor = colors[randomIndex];
    }
};

// Function to populate the day dropdown (1-31)
function populateDays(selectorId: string): void {
    const daySelect = document.getElementById(selectorId) as HTMLSelectElement;
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i.toString();
        option.text = i.toString();
        daySelect.appendChild(option);
    }
};

// Function to populate the year dropdown (current year to 100 years ago)
function populateYears(selectorId: string): void {
    const yearSelect = document.getElementById(selectorId) as HTMLSelectElement;
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        const option = document.createElement("option");
        option.value = i.toString();
        option.text = i.toString();
        yearSelect.appendChild(option);
    }
}

// Populate the start and end date dropdowns on page load
window.onload = (): void => {
    populateDays("dayStart");
    populateDays("dayEnd");
    populateYears("yearStart");
    populateYears("yearEnd");
};
