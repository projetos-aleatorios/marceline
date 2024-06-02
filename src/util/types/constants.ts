import type { Method } from "@marceline/services/Client";

export type ENDPOINT = 'CUSTOM_GAME' | 'MATCHES' | 'PROFILE' | 'INVITE_PLAYER' | 'UPDATE_GAME_MODE' | 'UPDATE_TEAM_SETTING' | 'LEAVE_LOBBY';

export type HEADERS = {
    baseURL: string;
    userAgent: string;
    apiKey: string;
}

export type OUTPUT = {
    method: Method;
    endpoint: string;
    query: string | null;
    body: any;
}

export type CUSTOM_GAME = {
    CrossplayPreference: number;
    GameplayPreferences: number;
    LobbyTemplate: string;
    LobbyType: number;
    Platform: string;
    Version: string;
}

export type INVITE_PLAYER = {
    CrossplayPreference: number;
    GameplayPreferences: number;
    InviteeAccountID: string;
    IsSpectator: number;
    LobbyId: string;
    LobbyTemplate: string;
    MatchID: string;
    LobbyType: number;
    Platform: string;
    Version: string;
}

export type LEAVE_LOBBY = {
    CrossplayPreference: number;
    GameplayPreferences: number;
    LobbyId: string;
    LobbyTemplate: string;
    MatchID: string;
    Platform: string;
    Version: string;
}