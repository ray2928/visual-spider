/**
 Action Creators

 These fire events which the reducer will handle
 We will later call these functions from inside our component

 Later these functions get bound to 'dispatch' fires the actual event
 Right now they just return an object

 It's a code convention to use all capitals and snake case for the event names
 We use const to store the name of the event so it is immutable

 */

// increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    };
}

// add

export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// delete

export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}