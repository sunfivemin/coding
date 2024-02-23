"use strict";

const sectionIds = ["#home", "#work"];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));

const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

const options = {
    rootMargin: "-20% 0px 0px 0px",
    threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
    let selectLastOne; // flag 변수 (true인지 아닌지 알려주는 변수)
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;
        selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.95;
    });

    const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections);
    selectNavItem(navIndex);
}

function findFirstIntersecting(intersections) {
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0;
}

function selectNavItem(index) {
    const navItem = navItems[index];
    if (!navItem) return;
    activeNavItem.classList.remove("active");
    activeNavItem = navItem;
    activeNavItem.classList.add("active");
}
