export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

export function categoryCreate(value) {
    return {type: CATEGORY_CREATE, value}
} 

export function categoryUpdate(value) {
    return {type: CATEGORY_UPDATE, value}
}

export function categoryDestoy(value) {
    return {type: CATEGORY_DESTROY, value}
}