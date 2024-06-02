import { type HEADERS, type ENDPOINT, type OUTPUT } from "@bubblegum/types/constants";

export const CONFIG: HEADERS = {
    baseURL: 'https://dokken-api.wbagora.com/',
    userAgent: 'Hydra-Cpp/1.184.1',
    apiKey: '51586fdcbd214feb84b0e475b130fce0',
};

export const MODES = ["SOLOS", "DUOS", "FFA"];
export const MINUTES: { [key: number]: string } = {
    1: '<',
    2: 'x',
    3: '´',
    5: ',',
    7: '¤'
}

const BODY: Record<ENDPOINT, {}> = {
    'CUSTOM_GAME': {
        "CrossplayPreference": 0,
        "GameplayPreferences": 0,
        "LobbyTemplate": "custom_game_lobby",
        "LobbyType": 0,
        "Platform": "PC",
        "Version": "CLIENT:24D73 DATA:6E9DA63A PERKS:1"
    },
    'MATCHES': {},
    'PROFILE': {},
    'INVITE_PLAYER': {
        "CrossplayPreference": 0,
        "GameplayPreferences": 0,
        "InviteeAccountID": "",
        "IsSpectator": 0,
        "LobbyId": "",
        "LobbyTemplate": "custom_game_lobby",
        "MatchID": "",
        "LobbyType": 0,
        "Platform": "PC",
        "Version": "CLIENT:24D73 DATA:6E9DA63A PERKS:1",
    },
    'LEAVE_LOBBY': {
        "CrossplayPreference": 0,
        "GameplayPreferences": 0,
        "LobbyId": "",
        "LobbyTemplate": "custom_game_lobby",
        "MatchID": "",
        "Platform": "PC",
        "Version": "CLIENT:24D73 DATA:6E9DA63A PERKS:1"
    },
    'UPDATE_GAME_MODE': {
        "MatchID": "",
        "TeamStyle": "Solos"
    },
    "UPDATE_TEAM_SETTING": {
        "MatchID": "",
    }
}

export const CUSTOM_SETTINGS: { [key: number]: {} } = {
    1: {
        "MatchID": "",
        "SettingKey": "MatchDuration",
        "SettingValue": MINUTES[2]
    },
    2: {
        "MatchID": "",
        "SettingKey": "NumRingoutsForWin",
        "SettingValue": 3
    },
}

export const BMO: Record<ENDPOINT, OUTPUT> = {
    'CUSTOM_GAME': {
        method: 'PUT',
        endpoint: '/ssc/invoke/create_custom_game_lobby',
        query: null,
        body: BODY['CUSTOM_GAME']
    },
    'MATCHES': {
        method: 'GET',
        endpoint: '/matches/',
        query: '?fields=server_data',
        body: BODY['MATCHES']
    },
    'PROFILE': {
        method: 'GET',
        endpoint: '/profiles/search_queries/get-by-username/run?limit=100&username=',
        query: '&account_fields=identity&account_fields=presence&account_fields=server_data&account_fields=data&partial_response=1',
        body: BODY['PROFILE']
    },
    'INVITE_PLAYER': {
        method: 'PUT',
        endpoint: '/ssc/invoke/invite_to_player_lobby',
        query: null,
        body: BODY['INVITE_PLAYER']
    },
    'LEAVE_LOBBY': {
        method: 'PUT',
        endpoint: '/ssc/invoke/leave_player_lobby',
        query: null,
        body: BODY['LEAVE_LOBBY']
    },
    'UPDATE_GAME_MODE': {
        method: 'PUT',
        endpoint: '/ssc/invoke/update_team_style_for_custom_game',
        query: null,
        body: BODY['UPDATE_GAME_MODE']
    },
    'UPDATE_TEAM_SETTING': {
        method: 'PUT',
        endpoint: '/ssc/invoke/update_int_setting_for_custom_game',
        query: null,
        body: BODY['UPDATE_TEAM_SETTING']
    }
}