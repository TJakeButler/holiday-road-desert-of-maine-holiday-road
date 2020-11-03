export const Eatery = (eateryObj) => {
    return `
    <div class="eateryCard">
            <p class="eatery__name">${eateryObj.businessName}
                <button id="detail--${eateryObj.id}" type="button">Details</button>
                </p>
                </div>
                `
}