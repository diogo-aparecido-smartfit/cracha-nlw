const socialMediaLinks = {
  github: 'DiogoAMV',
  youtube: 'LordTKG',
  instagram: 'diogo.amv',
  twitter: 'amvDiogo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      personalProfilePicture.src = data.avatar_url
      userName.textContent = data.name
      userLink.href = data.html_url
      bio.textContent = data.bio
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
