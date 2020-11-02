export const Eatery = (eateryObj) => {
    return `
    <div class="park">
            <p class="park__name">${eateryObj.businessName}
                <button id="detail--${eateryObj.id}" type="button">Details</button>
                </p>
                </div>
                `
}