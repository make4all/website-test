const jobListElement = document.getElementById('jobList');
const loadMoreButton = document.getElementById('loadMoreButton');
let jobIds = [];
let currentPage = 0;
const jobsPerPage = 6;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
        .then(response => response.json())
        .then(data => {
            jobIds = data;
            loadMoreJobs();
        })
        .catch(error => console.error('Error fetching job IDs:', error));
});

function loadMoreJobs() {
    const startIndex = currentPage * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const jobIdsToFetch = jobIds.slice(startIndex, endIndex);

    Promise.all(jobIdsToFetch.map(id => fetchJobDetails(id)))
        .then(jobs => {
            jobs.forEach(job => {
                const jobItem = document.createElement('li');
                jobItem.className = 'job-item';
                
                const jobTitle = job.url 
                    ? `<a href="${job.url}" target="_blank">${job.title}</a>` 
                    : job.title;
                
                jobItem.innerHTML = `
                    <h2>${jobTitle}</h2>
                    <p>Posted by: ${job.by}</p>
                    <p>Date: ${new Date(job.time * 1000).toLocaleDateString()}</p>
                `;

                jobListElement.appendChild(jobItem);
            });

            currentPage++;
            if (currentPage * jobsPerPage >= jobIds.length) {
                loadMoreButton.classList.add('hidden');
            }
        })
        .catch(error => console.error('Error fetching job details:', error));
}

function fetchJobDetails(id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(response => response.json());
}
