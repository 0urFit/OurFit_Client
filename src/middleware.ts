import { NextResponse } from 'next/server';

import { TOKEN } from './utils/constants';
import { ROUTES } from './route/routes';

import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { cookies } = request;
    const path = request.nextUrl.pathname;

    const hasRefreshToken = () => {
        return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
    };

    if (!cookies.get(TOKEN.REFRESH_TOKEN_KEY)) {
        if (path.startsWith(ROUTES.HOME)) {
            hasRefreshToken();
        }
        if (path.startsWith(ROUTES.SAVE)) {
            hasRefreshToken();
        }
        if (path.startsWith(ROUTES.POSTS)) {
            hasRefreshToken();
        }
        if (path.startsWith(ROUTES.MYPAGE)) {
            hasRefreshToken();
        }
    }
}
