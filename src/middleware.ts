import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { TOKEN } from './utils/constants';

export function middleware(request: NextRequest) {
    const { cookies } = request;

    if (!cookies.get(TOKEN.REFRESH_TOKEN_KEY)) {
        return NextResponse.redirect(new URL('/', request.nextUrl.origin));
    }
}

export const config = {
    matcher: ['/home', '/save', '/home/detail', '/save/detail', '/post', '/mypage/likes'],
};
