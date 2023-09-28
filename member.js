function skillsMember(skills) {
    return skills.map(skill => {
      return {
        skill: skill,
        user: this.name
      }
    })
  }