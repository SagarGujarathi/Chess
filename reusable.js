import { Turn, Check, Select } from '/solve.js'
import { Circle, Red, Blue, White } from '/main.js'
export function Index(i, j, k) {
    switch (k) {
        case 1:
            i--;
            break;
        case 2:
            i++;
            break;
        case 3:
            j++;
            break;
        case 4:
            j--;
            break;
        case 5:
            i--, j++;
            break;
        case 6:
            i--, j--;
            break;
        case 7:
            i++, j++;
            break;
        case 8:
            i++, j--;
            break;
    }
    return [i, j];
}
export function color(i, j) {
    if (range(i, j)) {
        return true;
    }
    let element = document.querySelector(`#p-${i}-${j}`);
    let image = element.style.backgroundImage;
    if (image == '') {
        if (CheckClass(element)) {
            return false;
        }
        element.style.backgroundImage = Circle;
        return false;
    }
    else if (image == Circle) {
        element.style.backgroundImage = '';
        return false;
    }
    else if (element.style.backgroundColor == Red) {
        element.style.backgroundColor = ((i + j) % 2 == 0) ? White : Blue;
    }
    else if ((image[13] == 'w' && Turn) || (image[13] == 'b' && !Turn)) {
        if (CheckClass(element)) {
            return true;
        }
        element.style.backgroundColor = Red;
    }
    return true;
}
export function range(i, j) {
    if (i < 0 || j < 0 || i > 7 || j > 7) {
        return true;
    }
    return false;
}
//  Function to check list of classes

export function CheckClass(element) {
    if (Select.classList.contains('AvoidMove')) {
        if ((element.classList.contains('DangerPath') || element.classList.contains('DangerPiece') || element.classList.contains('OkPath'))) {
            return false;
        }
        return true;
    }
    if (Check) {
        if (element.classList.contains('DangerPath') || element.classList.contains('DangerPiece')) {
            return false;
        }
        return true;
    }
    return false;
}
