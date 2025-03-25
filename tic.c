#include<stdio.h>
char board[3][3];
char current_marker;
char current_player;

void drawBoard() {
    printf(" %c | %c | %c\n", board[0][0], board[0][1], board[0][2]);
    printf("---|---|---\n");
    printf(" %c | %c | %c\n", board[1][0], board[1][1], board[1][2]);
    printf("---|---|---\n");
    printf(" %c | %c | %c\n", board[2][0], board[2][1], board[2][2]);
}

int placeMarker(int slot) {
    int row = slot / 3;
    int col = slot % 3;

    if (board[row][col] != ' ') {
        return 0;
    }

    board[row][col] = current_marker;
    return 1;
}

int checkWinner() {
    for (int i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' ') {
            return current_player;
        }
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' ') {
            return current_player;
        }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        return current_player;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        return current_player;
    }

    return 0;
}

void swapPlayerAndMarker() {
    if (current_marker == 'X') {
        current_marker = 'O';
    } else {
        current_marker = 'X';
    }

    if (current_player == '1') {
        current_player = '2';
    } else {
        current_player = '1';
    }
}

void resetBoard() {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            board[i][j] = ' ';
        }
    }
}

int main() {
    current_marker = 'X';
    current_player = '1';
    resetBoard();

    int winner = 0;
    int slot;

    for (int i = 0; i < 9; i++) {
        drawBoard();
        printf("Player %c, enter your slot: ", current_player);
        scanf("%d", &slot);

        if (slot < 1 || slot > 9 || !placeMarker(slot - 1)) {
            printf("Invalid slot! Try again.\n");
            i--;
            continue;
        }

        winner = checkWinner();
        if (winner != 0) {
            drawBoard();
            printf("Player %c wins!\n", current_player);
            break;
        }

        swapPlayerAndMarker();
    }

    if (winner == 0) {
        drawBoard();
        printf("It's a draw!\n");
    }

    return 0;
}