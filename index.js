// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    if (pickupLocation > 42){
        return (pickupLocation - 42);
    } else if (pickupLocation < 42){
        return (42 - pickupLocation)
    } else {
        return 0;
    }
};

function distanceFromHqInFeet(pickupLocation){
    let numberOfBlocks = distanceFromHqInBlocks(pickupLocation);
    return (numberOfBlocks * 264);
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return ((start - destination)*264)
    } else if (destination > start){
        return ((destination - start)*264)
    } else {
        return 0; 
    }
}

function calculatesFarePrice(start, destination){
    let travelledDistance = distanceTravelledInFeet(start, destination);
    if (travelledDistance <= 400){
        return 0; 
    } else if (travelledDistance > 400 && travelledDistance < 2000){
        return ((travelledDistance - 400) * 0.02);
    } else if (travelledDistance > 2000 && travelledDistance <= 2500){
        return 25;
    } else if (travelledDistance > 2500){
        return "cannot travel that far"
    }
}