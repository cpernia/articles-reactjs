import moment from 'moment';

export const lowercase = function(str){
    if(str) {
        return str.toLowerCase();
    }
};

export const firstLetterUppercase = function(str){
    if(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

export const uppercase = function(str){
    if(str){
        return str.toUpperCase();
    }
};

export const formatDate = function(str){
    if(str){
        return moment(str).format('MM/DD/YYYY');
    }
};

export const subText = function (str, limit) {
    if (str.length > limit) {
        return str.substr(0, limit) + '...';
    }
    return str;
};

export const subEmail = function (str) {
    return str.split('@')[0] + '...';
};


