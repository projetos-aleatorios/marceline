import type { INVITE_PLAYER, LEAVE_LOBBY } from "@bubblegum/types/constants";

export function invite(body: INVITE_PLAYER, playerId: string, lobbyId: string): INVITE_PLAYER {
    body.InviteeAccountID = playerId;
    body.LobbyId = lobbyId;
    body.MatchID = lobbyId  
    return body;
}

export function leave(body: LEAVE_LOBBY, lobbyId: string): LEAVE_LOBBY {
    body.MatchID = lobbyId;
    body.LobbyId = lobbyId;
    return body
}