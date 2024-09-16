

class APIService {
    static BASE_URL = "https://930-studio.com/";

 static signIn = (userData) => {
        return fetch(`${this.BASE_URL}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
    };

    static signUp = (userData) => {
        return fetch(`${this.BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
    };

     static postProgress = (gameData,token:string) => {
        return fetch(`${this.BASE_URL}/progress`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(gameData)
        });
    };

    static getMainScreen = () => {
        return fetch(`${this.BASE_URL}/mainScreen`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getAllCharacters = () => {
        return fetch(`${this.BASE_URL}/characters`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getCharacters = (charId: number) => {
        return fetch(`${this.BASE_URL}/characters?charId=${charId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getComments = (commId: number) => {
        return fetch(`${this.BASE_URL}/comments?commId=${commId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getOptions = () => {
        return fetch(`${this.BASE_URL}/options`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getEndings = () => {
        return fetch(`${this.BASE_URL}/endings`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getDefinitions = () => {
        return fetch(`${this.BASE_URL}/definitions`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getEvents = () => {
        return fetch(`${this.BASE_URL}/events`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getLocations = () => {
        return fetch(`${this.BASE_URL}/locations`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getUsers = () => {
        return fetch(`${this.BASE_URL}/users`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getRecords = (userId: number) => {
        return fetch(`${this.BASE_URL}/records?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getCollections = (userId: number) => {
        return fetch(`${this.BASE_URL}/collections?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    static getUnlockableEndings = (userId: number) => {
        return fetch(`${this.BASE_URL}/unlockableEndings?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

        static getOutcome = (endingId: number,token: string) => {
        return fetch(`${this.BASE_URL}/outcome/${endingId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    };
}

export default APIService;