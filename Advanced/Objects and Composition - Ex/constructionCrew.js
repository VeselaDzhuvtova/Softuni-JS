function constructionCrew (input) {

    let res = input;

    let water = (input.weight * 0.1) * input.experience;

    if (input.dizziness === true) {
        res.levelOfHydrated = water;
        res.dizziness = false;
    }
    return res;
}
constructionCrew ({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )