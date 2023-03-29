class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;
      // this.model.setRepoInfo(repoName);
      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });

    });
  }

  display(repoData) {
  const full_name = document.querySelector('#repo-name');
  const description = document.querySelector('#repo-description');
  full_name.innerText = repoData.full_name;
  description.innerText =repoData.description;

  const image = document.createElement('img');
  image.setAttribute('src',`${repoData.organization.avatar_url}` )
  console.log(image);
  description.after(image);
  }
}

module.exports = GithubView;