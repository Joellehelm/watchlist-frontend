import React, { Component } from 'react';

function Compass(props){
  
        return (
            <div>
                <svg className="compass" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50px" height="50px" viewBox="0 0 1280.000000 1254.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1254.000000) scale(0.100000,-0.100000)"
fill={props.fill} stroke="none">
<path fill="red" d="M7168 12524 c-71 -22 -160 -109 -203 -198 -39 -82 -52 -132 -95 -345
-27 -136 -40 -187 -40 -155 0 5 -32 68 -71 139 -150 272 -202 373 -240 460
l-38 90 -93 -3 c-233 -9 -390 -128 -430 -328 -6 -30 -8 -57 -5 -60 3 -3 37 11
76 30 66 34 71 39 71 69 0 38 33 113 63 145 31 33 84 59 140 67 40 6 47 5 47
-10 0 -35 -120 -612 -134 -647 -20 -46 -70 -104 -107 -124 -65 -33 -157 -9
-209 55 l-30 36 -56 -57 -57 -56 53 -30 c139 -79 300 -55 415 63 92 94 157
257 197 493 6 39 15 72 18 72 4 0 14 -17 24 -37 10 -21 74 -137 142 -259 68
-121 142 -260 165 -308 45 -94 43 -93 113 -67 26 11 26 11 51 161 43 250 117
588 141 637 45 93 121 121 200 74 29 -18 39 -19 46 -9 13 19 48 86 48 92 0 9
-75 26 -115 25 -22 0 -61 -7 -87 -15z"/>
<path d="M6557 11394 c-4 -4 -7 -32 -7 -63 0 -45 -98 -769 -105 -779 -4 -5
-269 -22 -273 -17 -5 4 -81 738 -82 783 0 21 -23 31 -34 13 -5 -7 54 -649 69
-758 7 -49 11 -47 -123 -63 -51 -6 -127 -17 -169 -25 -42 -8 -78 -14 -79 -12
-1 1 -37 178 -80 392 -42 215 -80 393 -83 397 -3 4 -12 3 -20 -1 -11 -7 0 -78
64 -400 43 -215 76 -393 74 -395 -2 -1 -78 -21 -169 -43 -91 -23 -172 -44
-180 -47 -14 -6 -46 92 -231 706 -15 50 -23 66 -34 61 -8 -3 -15 -11 -15 -18
0 -11 190 -648 220 -737 l9 -27 -112 -37 c-62 -21 -142 -50 -180 -65 l-67 -28
-16 37 c-9 20 -24 57 -34 82 -10 25 -68 166 -130 314 -61 147 -115 279 -120
292 -6 16 -15 22 -25 18 -8 -3 -15 -10 -15 -15 0 -5 66 -168 146 -362 161
-388 161 -387 145 -387 -6 0 -83 -34 -171 -77 -88 -42 -162 -74 -164 -72 -1 2
-87 162 -191 356 -132 248 -192 350 -201 346 -8 -3 -14 -9 -14 -15 0 -5 84
-167 186 -359 103 -192 185 -351 183 -353 -2 -2 -56 -34 -119 -71 -63 -38
-134 -81 -157 -97 l-42 -28 -217 322 c-119 178 -223 330 -230 338 -11 11 -17
11 -25 3 -9 -9 41 -91 209 -342 122 -181 222 -334 222 -339 0 -5 -26 -26 -57
-48 -32 -21 -99 -71 -150 -111 l-92 -71 -258 314 c-219 267 -260 312 -271 300
-12 -12 24 -60 242 -326 l257 -312 -48 -41 c-26 -23 -77 -69 -113 -102 -36
-33 -78 -71 -93 -85 l-28 -24 -282 282 c-155 155 -287 282 -294 282 -41 0 -1
-46 261 -309 l286 -286 -87 -95 c-49 -53 -105 -115 -125 -139 -21 -25 -43 -41
-50 -38 -7 3 -148 116 -312 252 -165 135 -304 244 -309 242 -6 -2 -12 -8 -14
-14 -3 -7 500 -430 605 -509 13 -9 6 -22 -40 -80 -30 -38 -79 -103 -108 -144
-29 -41 -57 -79 -61 -83 -3 -5 -156 91 -339 213 -298 199 -360 234 -360 202 0
-5 151 -109 335 -232 184 -123 335 -224 335 -226 0 -2 -26 -45 -58 -96 -32
-51 -76 -123 -96 -161 l-38 -67 -121 64 c-67 35 -228 121 -356 190 -129 68
-239 123 -243 120 -4 -3 -8 -11 -8 -18 0 -7 159 -98 353 -201 l354 -189 -67
-141 c-36 -77 -73 -154 -81 -172 l-14 -32 -360 150 c-430 178 -395 165 -395
141 0 -16 62 -45 368 -172 202 -84 368 -153 370 -155 1 -1 -15 -47 -36 -101
-21 -54 -49 -134 -63 -176 -13 -43 -27 -78 -30 -78 -4 0 -170 50 -370 110
-449 137 -409 127 -409 103 0 -17 49 -35 374 -133 206 -62 380 -116 386 -120
8 -5 4 -32 -14 -96 -14 -49 -35 -131 -46 -182 -18 -76 -25 -92 -38 -88 -10 3
-179 37 -377 75 -198 39 -370 73 -383 76 -17 4 -22 1 -22 -15 0 -11 3 -20 8
-20 4 -1 180 -36 392 -79 382 -77 385 -77 384 -102 -1 -13 -12 -97 -25 -186
-23 -162 -24 -163 -49 -163 -14 1 -195 18 -402 38 -354 35 -378 37 -378 20 0
-10 9 -20 23 -22 12 -3 191 -21 397 -41 206 -20 376 -38 378 -39 1 -2 0 -65
-4 -139 l-7 -137 -31 -5 c-136 -24 -612 -88 -698 -94 -103 -7 -129 -13 -115
-27 4 -4 48 -11 99 -16 51 -4 239 -30 418 -56 l325 -47 8 -134 c4 -73 6 -136
3 -138 -2 -3 -761 -82 -793 -83 -2 0 -3 -9 -3 -21 0 -18 4 -20 43 -14 74 10
760 76 762 73 1 -2 12 -75 24 -163 12 -88 24 -171 27 -185 l5 -25 -395 -79
c-351 -70 -396 -81 -396 -97 0 -11 4 -19 8 -19 4 0 183 35 398 78 l391 78 45
-180 c25 -100 43 -184 39 -188 -3 -3 -174 -57 -380 -119 -340 -103 -398 -125
-377 -146 6 -7 33 1 466 132 151 46 283 85 293 87 16 2 27 -19 66 -132 26 -74
55 -153 65 -174 13 -31 14 -41 4 -47 -7 -5 -173 -74 -368 -155 -195 -80 -358
-149 -362 -153 -4 -3 -3 -12 1 -20 7 -11 83 16 380 139 204 84 373 151 375
149 2 -2 39 -79 83 -171 l81 -166 -354 -189 c-194 -103 -354 -193 -354 -200 0
-6 4 -14 9 -18 5 -3 169 80 363 183 l353 189 16 -26 c9 -14 42 -69 73 -121 30
-52 67 -114 82 -137 l25 -42 -333 -222 c-183 -122 -335 -223 -337 -225 -2 -2
2 -10 8 -18 11 -13 63 19 349 209 l336 224 50 -71 c28 -39 79 -108 114 -152
50 -64 60 -82 50 -92 -7 -7 -146 -121 -308 -254 -162 -133 -296 -245 -297
-248 -2 -4 1 -13 6 -20 6 -10 89 52 322 244 l313 257 61 -69 c33 -38 90 -100
127 -139 l67 -70 -286 -287 c-254 -254 -285 -289 -273 -303 12 -15 45 16 301
271 l287 287 103 -94 c56 -52 119 -110 140 -129 l38 -35 -255 -309 c-207 -251
-252 -311 -242 -323 15 -18 -5 -40 283 312 131 160 241 291 245 293 3 1 42
-26 87 -60 44 -35 110 -83 146 -108 37 -25 67 -48 67 -53 0 -4 -99 -156 -221
-338 -190 -285 -219 -333 -207 -346 12 -12 46 33 238 322 123 184 226 335 231
335 4 0 49 -26 100 -58 52 -33 122 -74 156 -93 35 -19 63 -37 63 -41 0 -3 -84
-162 -186 -353 -168 -314 -195 -375 -165 -375 5 0 89 150 186 333 98 182 184
342 191 354 l14 22 132 -64 c73 -34 150 -70 172 -79 30 -12 37 -20 31 -33 -3
-10 -72 -177 -152 -371 -111 -267 -143 -356 -135 -364 8 -8 15 -8 21 -2 4 5
74 169 155 364 81 195 151 359 155 363 4 4 41 -5 82 -21 41 -16 118 -44 172
-61 72 -24 97 -37 96 -49 0 -9 -51 -183 -113 -387 -92 -303 -110 -372 -99
-378 8 -5 17 -7 19 -4 4 4 36 104 169 542 37 121 68 222 70 223 5 5 348 -80
358 -89 5 -3 -26 -181 -68 -394 -55 -278 -74 -390 -66 -398 7 -7 14 -7 20 -1
4 5 42 182 84 393 42 211 79 386 82 389 3 3 49 -2 103 -11 53 -9 135 -21 182
-28 47 -6 86 -11 87 -12 1 -1 -16 -180 -38 -397 -21 -217 -39 -398 -39 -402 0
-5 9 -8 20 -8 11 0 20 7 20 14 0 23 70 727 75 761 l5 30 138 -9 138 -9 52
-371 c29 -204 52 -392 52 -418 0 -43 13 -69 27 -54 3 3 9 54 13 113 7 92 79
625 96 704 5 26 6 26 140 35 75 5 137 7 139 4 2 -3 20 -182 41 -399 37 -381
45 -423 71 -397 4 3 -11 184 -32 401 -21 217 -36 397 -33 400 2 3 40 9 84 15
43 6 123 18 177 27 58 10 101 13 106 7 5 -5 42 -182 84 -392 42 -211 78 -386
81 -389 2 -3 11 -1 18 4 12 7 1 77 -63 398 -42 215 -75 393 -72 398 2 4 12 7
21 7 9 0 80 16 157 36 77 20 150 38 162 41 24 6 20 18 179 -510 43 -141 81
-257 84 -257 3 0 11 4 18 8 10 7 3 41 -32 153 -99 322 -188 621 -184 624 1 1
55 21 118 43 63 22 141 50 173 63 31 12 59 20 62 18 4 -4 196 -466 272 -651
31 -79 52 -104 67 -80 2 4 -65 174 -149 377 l-153 370 171 83 c95 46 173 78
177 73 3 -6 89 -166 190 -355 102 -190 187 -346 190 -346 3 0 11 4 18 9 12 7
-18 67 -319 628 l-50 92 73 42 c40 23 111 66 158 95 47 30 89 54 93 54 4 0
106 -149 228 -331 163 -245 224 -329 235 -325 9 3 18 6 20 6 2 0 -94 147 -214
328 -120 180 -221 332 -225 339 -5 7 28 37 90 82 54 39 122 89 151 112 45 36
55 40 67 28 7 -8 122 -147 255 -309 133 -162 246 -296 251 -298 5 -2 12 3 15
12 4 10 -75 113 -238 311 -133 163 -247 303 -253 311 -8 12 2 25 45 62 30 25
92 82 138 126 l83 80 167 -165 c401 -396 412 -406 424 -391 9 11 -44 69 -270
295 -155 155 -282 286 -282 291 0 5 35 46 78 90 43 45 98 106 124 136 l46 54
73 -59 c40 -33 181 -149 313 -257 186 -153 243 -195 253 -186 9 7 10 15 4 22
-5 6 -145 121 -310 256 -165 135 -300 250 -300 255 -1 6 21 37 47 70 26 33 76
99 111 147 l62 88 336 -225 c316 -211 352 -231 353 -195 0 3 -150 106 -334
229 l-335 224 40 61 c22 34 65 105 95 158 31 54 60 98 66 98 5 0 167 -84 359
-187 278 -147 353 -183 359 -172 5 8 6 17 2 21 -4 3 -160 88 -347 188 -187
100 -343 185 -348 189 -4 4 24 72 62 152 38 79 72 154 75 167 4 12 12 22 17
22 6 0 174 -68 376 -151 244 -101 369 -147 375 -141 6 6 8 14 5 19 -3 5 -172
78 -375 162 l-369 153 32 81 c17 45 46 126 64 180 20 60 38 97 45 94 6 -2 179
-55 385 -118 355 -107 391 -115 380 -82 -1 5 -174 60 -383 124 -281 86 -380
120 -377 130 2 8 22 89 45 181 29 119 45 168 55 168 8 0 186 -34 394 -75 297
-59 382 -73 388 -63 5 7 5 16 1 20 -4 3 -182 41 -397 84 -214 42 -391 78 -391
78 -1 1 6 48 16 106 10 58 22 137 25 176 4 39 10 76 14 82 5 9 105 2 361 -23
195 -19 376 -37 403 -41 43 -5 47 -4 47 15 0 12 -3 21 -7 21 -26 0 -796 80
-799 82 -3 3 16 271 19 274 7 6 732 104 767 104 46 0 80 13 67 26 -4 4 -53 11
-110 15 -98 8 -715 94 -722 101 -4 4 -25 271 -22 274 1 1 181 20 400 41 218
22 400 43 403 46 4 3 4 12 1 20 -4 11 -19 12 -74 6 -37 -4 -216 -22 -397 -40
-260 -25 -330 -29 -336 -19 -4 7 -11 43 -14 81 -4 38 -15 117 -25 175 -13 75
-15 107 -7 109 6 2 164 33 351 70 473 93 434 83 428 105 -4 14 -11 18 -27 15
-50 -12 -770 -154 -771 -152 -1 1 -13 54 -28 117 -14 63 -35 145 -46 182 l-19
67 31 10 c18 6 189 58 380 116 192 58 353 107 358 110 14 9 -2 36 -20 31 -9
-3 -182 -55 -385 -116 -202 -61 -370 -110 -372 -108 -2 2 -23 60 -47 128 -25
69 -53 147 -63 173 -15 38 -16 50 -6 56 7 4 175 75 372 156 198 82 360 151
360 154 -1 37 -71 12 -723 -262 l-38 -17 -21 48 c-11 26 -47 102 -79 170 -33
67 -59 124 -59 126 0 2 160 89 355 192 195 104 355 191 355 194 0 3 -4 11 -9
18 -6 11 -92 -31 -366 -178 -196 -105 -358 -190 -359 -188 -2 2 -24 41 -51 88
-26 46 -70 118 -96 159 l-47 75 326 219 c180 120 331 223 337 228 5 6 5 13 -3
21 -9 9 -90 -41 -348 -212 -278 -186 -337 -222 -345 -209 -4 9 -52 74 -105
145 -53 71 -98 134 -101 140 -2 7 135 126 305 265 278 229 332 280 288 279 -6
-1 -148 -113 -316 -250 -167 -138 -307 -250 -311 -250 -4 0 -45 44 -92 98 -47
53 -104 115 -126 137 l-41 39 287 288 c229 229 285 290 275 300 -10 10 -71
-46 -300 -275 l-288 -287 -39 41 c-22 22 -84 79 -137 126 -54 47 -98 88 -98
92 0 4 114 146 254 316 216 263 251 311 238 321 -13 9 -56 -37 -270 -298 -141
-172 -259 -307 -266 -305 -7 3 -69 48 -140 101 -70 52 -134 99 -143 104 -12 7
25 69 207 341 199 300 234 361 202 361 -5 0 -60 -77 -123 -172 -63 -94 -164
-245 -225 -334 l-111 -163 -74 47 c-41 26 -112 70 -159 96 -47 27 -86 50 -88
51 -1 1 83 161 187 356 163 304 187 356 175 368 -7 8 -15 13 -17 10 -2 -2 -88
-163 -191 -356 -104 -194 -192 -353 -197 -353 -5 0 -48 20 -96 44 -49 25 -123
61 -165 80 l-77 35 38 93 c262 630 271 652 259 660 -7 4 -15 8 -18 8 -3 0 -64
-141 -135 -312 -71 -172 -141 -341 -156 -375 l-27 -61 -69 27 c-37 15 -113 43
-168 61 -55 18 -104 36 -109 40 -4 5 14 82 42 172 50 164 169 558 178 591 4
12 0 17 -15 17 -12 0 -21 -2 -21 -4 0 -8 -229 -759 -233 -762 -2 -2 -32 5 -67
16 -35 11 -116 31 -180 46 -63 15 -116 27 -117 29 -3 1 138 713 152 771 3 16
-1 23 -15 27 -16 4 -21 -3 -30 -47 -5 -28 -41 -205 -79 -394 -37 -188 -70
-344 -72 -346 -2 -3 -27 0 -54 5 -28 6 -108 18 -180 28 l-130 17 1 59 c0 33
15 212 34 398 26 262 30 341 21 350 -9 9 -14 9 -19 0 -5 -7 -25 -191 -47 -408
l-38 -396 -86 6 c-177 12 -191 15 -196 38 -15 67 -88 618 -94 705 -7 95 -18
132 -34 116z m-182 -1341 c-4 -21 -26 -173 -49 -338 -24 -165 -46 -293 -49
-285 -2 8 -17 148 -32 310 -15 162 -29 305 -32 317 -5 24 10 28 115 31 l52 2
-5 -37z m542 23 c2 -2 -11 -153 -29 -335 -18 -183 -34 -327 -36 -321 -3 7 -26
161 -52 342 l-47 331 80 -6 c44 -4 82 -8 84 -11z m-702 -421 c19 -203 35 -392
35 -420 0 -49 -86 -695 -97 -725 -3 -8 -72 320 -154 730 -82 410 -151 755
-154 767 -5 19 1 22 68 34 39 6 113 17 162 24 l90 11 7 -25 c4 -14 23 -192 43
-396z m840 410 c89 -9 235 -36 235 -43 0 -14 -304 -1532 -306 -1529 -1 1 -26
166 -55 366 l-52 363 42 422 c23 231 41 425 41 429 0 5 8 6 18 3 9 -2 44 -7
77 -11z m-1239 -116 c7 -35 81 -406 165 -824 l151 -760 -11 -85 c-20 -151 -44
-301 -47 -297 -2 1 -30 93 -64 202 -33 110 -92 301 -129 425 -198 647 -401
1318 -401 1323 0 12 291 88 314 83 5 -1 15 -31 22 -67z m1630 46 c59 -14 130
-32 159 -40 l53 -16 -33 -107 c-18 -59 -124 -406 -235 -772 -239 -789 -319
-1050 -327 -1070 -3 -8 -18 71 -34 175 l-28 190 155 780 c170 858 176 885 181
885 2 0 51 -11 109 -25z m-1967 -201 c22 -71 69 -228 106 -349 36 -121 89
-293 116 -382 27 -90 71 -236 98 -325 27 -90 80 -262 116 -383 37 -121 85
-280 107 -353 l40 -134 -16 -111 c-9 -61 -17 -112 -19 -113 -2 -2 -44 97 -94
219 -51 122 -144 348 -208 502 -64 154 -170 408 -235 565 -65 157 -171 411
-235 565 -65 154 -119 290 -122 301 -4 19 4 25 64 48 90 34 237 84 241 81 1
-1 20 -60 41 -131z m2357 85 c77 -28 147 -53 157 -56 9 -3 17 -7 17 -8 0 -2
-29 -72 -64 -157 -35 -84 -118 -283 -184 -443 -66 -159 -192 -463 -280 -675
-274 -660 -350 -844 -363 -875 -14 -34 -13 -36 -33 101 l-15 100 44 145 c23
79 73 243 110 364 36 121 89 293 116 383 27 89 71 235 98 325 27 89 80 261
116 382 37 121 84 275 104 342 20 68 37 123 37 123 1 0 64 -23 140 -51z
m-2606 -426 c79 -192 195 -472 257 -623 124 -298 216 -519 325 -785 39 -93 95
-228 124 -298 30 -71 54 -130 54 -133 0 -2 -34 13 -76 34 l-76 38 -524 979
c-288 538 -524 982 -524 987 0 8 272 146 290 147 4 1 71 -155 150 -346z m3028
249 c51 -25 91 -49 90 -52 -2 -4 -239 -446 -527 -984 l-524 -977 -69 -35 c-39
-19 -72 -33 -75 -31 -3 4 878 2144 893 2168 5 9 81 -23 212 -89z m-2998 -1023
c280 -524 508 -955 506 -957 -2 -1 -48 19 -102 45 l-99 49 -552 824 c-547 817
-552 824 -530 839 38 27 262 160 265 157 1 -2 231 -432 512 -957z m3259 882
c64 -39 124 -76 135 -84 18 -13 -14 -63 -533 -838 l-552 -824 -101 -47 c-55
-27 -102 -48 -104 -48 -1 0 111 213 250 473 139 259 369 689 510 955 142 265
263 482 268 482 6 0 63 -31 127 -69z m-3559 -915 l529 -795 -116 55 c-64 30
-135 65 -157 77 -30 16 -168 178 -549 641 l-509 619 23 19 c42 33 241 178 245
178 2 0 242 -358 534 -794z m3883 699 c70 -53 127 -99 127 -103 0 -4 -229
-285 -509 -626 l-509 -618 -144 -69 c-78 -38 -146 -69 -151 -69 -4 0 230 356
520 790 289 435 529 790 532 790 3 0 63 -43 134 -95z m-4261 -680 c238 -291
451 -551 472 -577 l38 -48 -103 49 c-57 27 -169 80 -249 119 l-145 70 -358
359 -358 359 123 112 c94 84 126 108 134 99 6 -7 207 -250 446 -542z m4598
398 l75 -72 -354 -355 -355 -355 -244 -116 c-134 -64 -245 -115 -247 -113 -1
1 212 264 474 584 l476 581 50 -41 c27 -23 84 -73 125 -113z m-4968 -460 l357
-358 107 -220 c58 -121 110 -230 115 -243 8 -21 7 -22 -10 -10 -66 47 -1151
943 -1149 949 5 13 210 239 217 239 3 0 167 -161 363 -357z m5130 300 c31 -32
81 -87 111 -122 l54 -65 -56 -46 c-271 -224 -1121 -918 -1121 -915 0 2 52 113
115 247 l116 243 357 358 c196 196 359 357 362 357 3 0 31 -26 62 -57z m-5116
-731 l619 -507 73 -149 c40 -82 71 -150 69 -152 -2 -2 -359 234 -795 525
l-792 528 57 79 c91 126 137 184 144 184 4 0 285 -228 625 -508z m5361 446
c92 -119 146 -199 137 -207 -21 -19 -1576 -1052 -1579 -1049 -2 2 28 70 68
151 l72 148 620 509 c341 281 623 510 627 510 3 0 28 -28 55 -62z m-5371 -794
l815 -546 50 -101 c27 -55 48 -101 47 -102 -2 -2 -434 227 -961 508 -737 394
-956 515 -952 527 3 8 40 73 82 143 49 81 82 126 90 123 7 -3 380 -251 829
-552z m5626 420 c43 -71 78 -134 78 -141 0 -6 -424 -237 -942 -513 -519 -277
-949 -507 -956 -513 -25 -19 -19 -1 32 101 l51 103 820 549 c451 302 824 548
829 546 6 -1 45 -60 88 -132z m-5665 -711 l986 -528 33 -70 c18 -38 31 -72 29
-73 -2 -2 -401 160 -887 361 -486 201 -974 403 -1085 449 -112 46 -203 88
-203 95 0 13 131 293 136 293 2 0 448 -237 991 -527z m5827 415 c70 -147 86
-187 78 -192 -4 -2 -423 -176 -932 -386 -509 -210 -998 -413 -1087 -450 -90
-37 -163 -66 -163 -65 0 2 16 36 35 76 l35 73 982 527 c541 290 986 527 990
528 5 1 32 -50 62 -111z m-6673 -351 c112 -47 575 -239 1029 -427 454 -188
829 -345 833 -349 4 -4 -42 -15 -103 -23 l-111 -16 -357 108 c-196 59 -658
199 -1027 310 -368 112 -672 205 -675 207 -5 5 58 194 90 267 l19 46 49 -19
c26 -11 140 -57 253 -104z m6804 51 c53 -140 84 -238 77 -242 -6 -3 -1055
-321 -1832 -556 l-225 -68 -113 16 c-62 8 -109 18 -105 22 4 4 278 119 608
255 330 137 814 338 1075 446 261 109 478 198 481 198 4 1 19 -32 34 -71z
m-6577 -478 c345 -105 779 -237 964 -293 186 -56 338 -104 338 -107 0 -3 -82
-17 -182 -32 l-183 -26 -730 145 c-401 79 -777 153 -835 165 -58 11 -106 21
-107 22 -1 1 16 74 37 161 22 88 40 161 40 163 0 2 7 2 15 -2 9 -3 298 -91
643 -196z m6717 27 c20 -82 35 -150 33 -152 -5 -5 -1627 -326 -1657 -328 -42
-2 -381 47 -381 55 0 4 5 8 12 8 10 0 332 97 1558 470 263 80 387 114 392 106
4 -6 24 -78 43 -159z m-6736 -337 c388 -77 730 -145 759 -151 30 -6 52 -12 50
-14 -2 -2 -165 -27 -363 -55 l-360 -52 -370 36 c-203 20 -396 39 -429 43 l-59
6 6 57 c14 126 40 270 50 270 6 0 328 -63 716 -140z m6781 136 c0 -2 5 -28 10
-57 12 -60 40 -263 37 -265 -1 -1 -194 -21 -428 -44 l-426 -42 -359 52 c-197
28 -363 52 -368 54 -11 3 1478 304 1512 305 12 1 22 -1 22 -3z m-7205 -398
c182 -18 321 -34 310 -36 -11 -3 -168 -26 -349 -52 l-329 -47 7 60 c3 33 6 71
6 83 0 13 6 24 13 24 6 0 161 -14 342 -32z m7259 -5 c3 -21 6 -58 6 -83 l0
-45 -322 46 c-355 51 -381 56 -328 59 19 1 154 14 300 30 362 38 336 38 344
-7z m-7274 -553 c184 -26 328 -49 320 -50 -8 -1 -158 -16 -333 -33 -175 -18
-320 -30 -322 -27 -8 14 -16 160 -8 160 4 -1 159 -23 343 -50z m7279 -7 c-1
-32 -4 -69 -8 -83 l-6 -25 -320 32 c-176 17 -324 33 -330 34 -10 1 612 96 648
98 14 1 17 -8 16 -56z m-6392 -119 c194 -27 353 -52 353 -56 0 -5 -8 -8 -17
-8 -10 0 -353 -67 -761 -149 -494 -98 -745 -144 -748 -137 -7 21 -33 182 -39
252 l-7 71 88 7 c49 4 235 22 414 41 179 18 334 32 345 31 11 -1 179 -24 372
-52z m5973 10 c217 -20 398 -40 401 -43 7 -6 -9 -143 -31 -263 -7 -42 -16 -65
-23 -63 -7 2 -345 70 -752 150 -407 80 -747 148 -755 152 -19 7 705 113 740
108 14 -2 203 -20 420 -41z m-5274 -110 c99 -14 180 -26 181 -27 0 -1 -146
-47 -325 -101 -350 -106 -904 -274 -1356 -412 -153 -46 -280 -83 -282 -81 -5
5 -71 268 -76 299 -3 22 11 25 807 184 446 89 824 162 841 163 18 1 112 -11
210 -25z m4735 -124 c415 -82 784 -155 822 -162 37 -7 67 -16 67 -19 0 -14
-42 -185 -61 -252 -16 -55 -23 -67 -37 -63 -9 3 -285 87 -612 186 -327 99
-761 231 -963 293 -203 61 -363 113 -357 115 22 8 315 50 351 51 20 0 375 -66
790 -149z m-4322 65 c51 -7 95 -15 96 -17 2 -2 -189 -83 -423 -180 -1290 -535
-1733 -718 -1740 -718 -5 0 -14 15 -20 33 -6 17 -29 83 -52 146 -22 63 -39
120 -36 126 2 6 24 17 47 24 59 17 1589 479 1809 546 96 30 186 54 200 54 14
0 67 -6 119 -14z m3450 -99 c207 -63 662 -200 1011 -306 349 -105 640 -193
647 -195 8 -3 2 -33 -21 -102 -51 -149 -77 -213 -85 -213 -5 0 -197 78 -427
174 -654 271 -1267 525 -1519 629 -209 87 -226 96 -195 101 87 15 148 24 179
25 18 0 202 -50 410 -113z m-3319 37 c0 -5 -17 -39 -38 -77 l-37 -69 -980
-523 c-539 -288 -983 -524 -986 -524 -10 0 -141 282 -136 294 3 6 324 143 713
304 390 161 876 362 1079 446 204 85 373 155 378 155 4 1 7 -2 7 -6z m3517
-339 c1241 -513 1334 -552 1339 -557 6 -6 -132 -297 -141 -297 -4 0 -450 237
-992 527 l-984 526 -25 49 c-30 58 -45 98 -39 98 3 0 382 -156 842 -346z
m-3665 28 l-47 -101 -823 -551 c-453 -302 -827 -550 -831 -550 -12 0 -171 261
-171 278 1 7 1912 1030 1918 1027 1 -1 -19 -47 -46 -103z m3938 -437 c492
-263 898 -479 902 -481 12 -7 -155 -284 -171 -284 -4 0 -376 247 -827 548
l-819 548 -52 100 c-29 54 -52 103 -53 107 0 4 28 -8 63 -27 34 -19 465 -249
957 -511z m-4102 97 l-73 -150 -622 -511 -622 -510 -49 62 c-27 34 -72 95
-101 134 l-51 73 793 529 c435 290 793 527 795 526 2 -2 -29 -71 -70 -153z
m4046 -387 c421 -280 766 -513 766 -516 0 -6 -137 -195 -175 -241 l-22 -26
-624 511 -624 512 -72 145 c-39 80 -72 149 -72 153 -1 11 -62 51 823 -538z
m-3038 133 c-765 -1855 -839 -2029 -860 -2022 -12 4 -80 35 -153 69 l-132 63
527 985 527 985 70 35 c39 20 73 36 77 36 4 1 -21 -68 -56 -151z m1865 -842
c271 -507 508 -949 527 -984 l34 -62 -145 -70 c-80 -39 -149 -70 -154 -70 -7
0 -892 2128 -901 2167 -2 9 24 0 71 -24 l76 -37 492 -920z m-1742 834 l13 -95
-311 -1024 c-170 -563 -312 -1025 -314 -1027 -5 -5 -213 66 -273 93 l-41 18
77 185 c43 102 160 383 260 625 252 607 397 958 487 1174 55 130 79 178 83
165 4 -11 13 -62 19 -114z m1276 -385 c114 -275 251 -606 305 -735 230 -554
340 -818 359 -863 12 -27 21 -50 21 -52 0 -7 -310 -119 -315 -113 -1 2 -142
467 -313 1033 l-311 1030 16 108 c9 59 20 104 24 100 4 -4 100 -233 214 -508z
m-2046 -481 c-270 -505 -500 -936 -511 -957 l-19 -38 -57 32 c-31 18 -96 56
-145 86 l-87 54 551 824 551 823 102 50 c55 27 102 48 104 47 1 -1 -219 -415
-489 -921z m2201 868 l95 -47 538 -805 c296 -443 543 -813 548 -822 8 -15 0
-24 -48 -55 -79 -50 -225 -134 -228 -131 -6 7 -1015 1899 -1015 1903 0 9 16 3
110 -43z m-2792 -225 l-112 -236 -362 -362 -363 -363 -22 20 c-40 35 -199 218
-197 225 4 10 1162 958 1166 955 1 -2 -48 -109 -110 -239z m4241 -241 c314
-258 570 -475 569 -482 -2 -7 -50 -65 -108 -128 l-105 -114 -365 365 -365 364
-110 231 c-129 269 -122 253 -103 242 8 -5 272 -220 587 -478z m-3969 -405
c-287 -430 -526 -784 -531 -787 -20 -12 -273 183 -260 200 4 6 233 286 509
622 l502 611 148 70 c81 39 149 69 150 68 2 -2 -231 -355 -518 -784z m2912
684 c92 -44 33 23 638 -714 l464 -564 -40 -35 c-55 -48 -206 -155 -221 -156
-9 -1 -1012 1479 -1054 1556 -10 18 22 5 213 -87z m-1767 -210 l27 -190 -111
-555 c-61 -305 -134 -674 -162 -820 -29 -146 -56 -269 -60 -274 -9 -10 -296
57 -312 73 -4 4 78 291 188 652 108 354 232 763 276 909 105 344 122 400 125
397 1 -1 15 -88 29 -192z m1110 -310 c81 -269 214 -707 295 -973 81 -265 144
-484 141 -486 -15 -10 -311 -79 -316 -74 -3 3 -79 376 -169 830 l-164 825 27
191 c14 105 29 188 32 184 3 -4 72 -227 154 -497z m-2610 -154 l-477 -581 -51
42 c-29 24 -85 75 -125 113 l-73 70 358 357 358 357 240 114 c132 63 241 113
243 112 2 -2 -211 -265 -473 -584z m3765 436 l175 -85 353 -354 354 -355 -69
-65 c-139 -133 -175 -161 -188 -146 -11 12 -915 1116 -938 1145 -11 15 64 -19
313 -140z m-2166 -657 c26 -179 46 -349 46 -378 0 -53 -65 -747 -76 -810 -5
-32 -7 -33 -42 -28 -20 3 -90 13 -154 22 -64 10 -121 20 -126 23 -6 4 53 322
142 768 85 429 154 754 158 745 4 -9 27 -163 52 -342z m936 -404 c114 -571
149 -761 139 -766 -6 -4 -30 -11 -53 -14 -85 -14 -259 -36 -262 -33 -2 1 -22
193 -45 425 l-41 421 51 358 c28 197 51 362 51 367 0 35 25 -84 160 -758z
m-760 -826 c0 -8 -154 1 -161 8 -5 5 53 638 61 662 1 4 98 -646 100 -670z
m510 326 c17 -170 27 -313 23 -317 -4 -4 -42 -9 -83 -10 -69 -2 -75 -1 -72 17
5 44 92 648 93 653 3 13 10 -46 39 -343z"/>
<path d="M2525 10680 c-22 -11 -74 -53 -116 -94 -86 -82 -105 -120 -134 -266
-26 -135 -22 -133 -77 -34 -28 49 -75 140 -106 203 l-55 114 -66 -6 c-104 -9
-175 -48 -220 -120 -18 -30 -44 -117 -37 -124 2 -2 24 5 50 16 30 13 46 27 46
38 0 10 9 37 19 60 20 44 62 73 104 73 l24 0 -38 -184 c-21 -102 -45 -198 -53
-215 -19 -36 -62 -71 -88 -71 -27 0 -74 26 -91 51 -15 21 -16 20 -51 -18 l-35
-38 22 -17 c39 -32 96 -41 157 -28 46 10 64 21 106 64 57 59 84 118 112 249
l18 80 89 -164 c49 -90 98 -182 108 -204 11 -22 20 -41 22 -43 1 -1 16 3 33 9
25 9 33 18 37 47 17 99 78 399 87 421 24 64 79 88 125 56 21 -15 23 -14 43 25
l21 40 -31 6 c-16 4 -27 11 -24 16 11 17 84 1 110 -23 60 -56 90 -231 79 -451
-6 -125 -5 -138 10 -138 36 0 54 25 145 209 56 113 97 186 101 178 12 -20 29
-199 29 -297 0 -80 2 -90 18 -90 10 0 25 6 34 13 9 6 76 128 149 270 93 178
139 257 150 257 16 0 29 19 29 41 0 5 -40 9 -89 9 -72 0 -90 -3 -95 -16 -11
-28 -7 -34 24 -34 17 0 30 -2 30 -5 0 -34 -152 -351 -156 -325 -1 8 -13 95
-25 193 l-23 178 -25 -3 c-23 -3 -37 -25 -113 -174 l-86 -171 -7 91 c-12 166
-43 263 -102 318 -54 51 -121 61 -188 28z"/>
<path d="M10786 10648 c-48 -13 -105 -69 -134 -131 -12 -25 -32 -99 -45 -163
l-24 -117 -76 139 c-43 76 -89 167 -104 202 l-27 62 -56 0 c-140 0 -247 -84
-270 -212 -4 -21 -6 -38 -3 -38 2 0 26 11 53 25 42 21 50 30 50 53 0 30 27 76
56 97 29 20 79 23 78 5 -3 -34 -66 -344 -75 -368 -32 -84 -110 -107 -173 -51
l-36 31 -35 -38 c-39 -41 -38 -43 22 -70 37 -16 120 -19 157 -4 40 15 106 80
130 129 27 53 52 135 61 204 4 26 10 47 14 47 7 -1 178 -315 200 -368 13 -31
17 -33 44 -28 34 7 47 21 47 51 0 43 78 402 94 436 21 44 55 63 91 49 29 -11
31 -22 9 -41 -23 -19 -44 -63 -53 -114 -5 -25 -7 -45 -4 -45 2 0 26 11 53 25
39 20 50 31 50 50 0 56 45 103 113 119 25 6 27 4 22 -16 -2 -13 -20 -101 -40
-197 -19 -96 -41 -184 -49 -197 -10 -14 -30 -25 -54 -29 -27 -4 -51 -18 -76
-44 l-38 -38 200 -8 c187 -7 201 -6 238 13 48 24 70 48 79 85 9 33 3 34 -36 5
-27 -21 -44 -23 -150 -25 l-120 -2 36 41 c32 38 65 117 65 156 0 11 13 13 68
7 66 -6 68 -6 96 24 l30 31 -87 0 c-100 0 -95 -9 -70 116 l16 84 36 0 c20 0
53 -5 74 -11 32 -9 37 -14 37 -40 0 -25 4 -30 22 -27 16 2 26 16 39 53 10 28
18 56 18 63 1 9 -38 12 -162 12 -152 0 -217 -8 -280 -35 -17 -7 -18 -6 -6 13
7 12 11 23 8 26 -11 12 -87 14 -123 4z"/>
<path fill="red" d="M248 6836 c-62 -17 -115 -53 -188 -128 -62 -63 -66 -74 -37 -92 14
-9 26 -1 69 41 73 70 108 86 179 81 117 -8 180 -97 227 -323 14 -66 17 -135
16 -393 l-1 -312 36 6 c20 4 40 9 45 12 4 2 82 155 172 340 91 184 167 333
169 330 21 -21 55 -348 55 -536 l0 -153 38 7 c20 3 42 11 48 18 6 6 112 206
235 444 212 410 225 432 250 432 31 0 33 3 43 43 l6 27 -144 0 c-141 0 -144 0
-150 -22 -11 -43 -7 -48 34 -48 28 0 43 -5 47 -16 11 -30 -36 -149 -149 -375
l-112 -224 -13 120 c-12 111 -56 449 -68 521 -5 31 -6 32 -43 22 l-38 -9 -150
-301 -149 -300 -7 133 c-15 311 -61 477 -159 579 -69 71 -170 101 -261 76z"/>
<path fill="red"d="M12202 6745 c-201 -44 -310 -155 -336 -342 l-6 -42 72 34 c62 30 73
39 76 63 7 62 25 105 59 143 44 49 92 75 156 84 47 7 48 7 42 -16 -3 -13 -32
-159 -65 -323 -33 -165 -69 -318 -80 -341 -22 -46 -50 -63 -119 -72 -38 -4
-55 -14 -98 -56 -29 -28 -53 -54 -53 -57 0 -3 35 -7 78 -8 42 -1 181 -7 307
-12 245 -11 267 -9 338 34 60 35 97 77 104 120 l6 36 -57 -34 c-75 -45 -108
-50 -303 -41 l-163 7 59 63 c63 68 89 123 112 234 l13 63 51 -6 c27 -3 77 -8
110 -12 l60 -6 45 46 44 46 -148 0 -148 0 5 23 c3 12 18 89 33 171 l29 148
101 -4 c131 -6 154 -19 154 -84 0 -45 0 -45 31 -42 29 3 32 7 60 93 16 50 29
93 29 98 0 13 -530 7 -598 -8z"/>
<path d="M2345 2533 c-16 -8 -49 -33 -72 -55 l-41 -40 -60 15 c-126 32 -243
-26 -273 -135 -16 -61 1 -93 101 -189 81 -78 90 -90 90 -123 0 -26 -7 -44 -25
-61 -34 -35 -113 -35 -174 0 l-44 26 -34 -33 c-18 -17 -33 -35 -33 -38 0 -14
105 -40 159 -40 153 0 270 106 239 216 -7 26 -37 63 -104 128 -96 93 -107 114
-84 157 38 70 175 60 182 -13 2 -25 8 -34 25 -36 19 -3 23 3 29 38 4 25 13 44
23 48 9 3 24 16 34 29 42 53 115 68 161 32 69 -54 91 -155 90 -406 -1 -106 2
-193 7 -193 40 0 58 26 149 209 52 105 98 187 101 183 12 -11 29 -192 29 -298
l0 -96 28 7 c15 3 30 9 33 13 4 4 67 123 140 265 95 183 138 257 150 257 16 0
29 19 29 41 0 5 -40 9 -89 9 -72 0 -90 -3 -95 -16 -11 -28 -7 -34 24 -34 17 0
30 -2 30 -5 0 -17 -56 -146 -101 -235 -41 -82 -54 -99 -56 -80 -12 104 -46
366 -48 368 -1 1 -14 -2 -28 -7 -21 -8 -44 -45 -110 -178 l-84 -167 -7 89
c-15 188 -57 297 -131 341 -49 28 -115 31 -160 7z"/>
<path d="M10350 2490 c-84 -39 -120 -89 -120 -166 0 -46 2 -49 97 -146 85 -87
97 -102 97 -133 0 -80 -91 -108 -190 -60 l-56 27 -34 -33 -34 -33 22 -13 c13
-6 46 -17 74 -24 118 -27 248 24 293 114 38 77 27 104 -85 215 -86 86 -94 97
-94 132 0 53 35 80 101 80 39 0 51 -4 68 -26 12 -15 21 -35 21 -45 0 -13 7
-19 23 -19 21 0 25 7 34 56 l10 56 -36 15 c-61 26 -140 27 -191 3z"/>
<path d="M10865 2490 c-160 -18 -232 -72 -261 -197 -7 -29 -10 -53 -8 -53 3 0
27 11 54 25 42 21 50 30 50 53 0 45 34 88 84 107 26 10 48 16 51 14 8 -9 -74
-392 -90 -415 -11 -17 -25 -24 -48 -24 -25 0 -42 -9 -72 -40 -21 -22 -37 -42
-34 -44 2 -2 95 -6 206 -8 l201 -3 43 30 c37 26 70 78 57 90 -2 2 -26 -7 -53
-20 -50 -26 -88 -30 -191 -19 l-59 6 32 35 c29 30 63 112 63 151 0 12 12 14
67 9 63 -6 69 -5 95 20 15 15 28 31 28 36 0 4 -38 7 -85 5 -47 -2 -85 1 -85 6
0 4 7 48 16 97 l17 89 46 -1 c77 -2 96 -10 99 -47 3 -27 7 -33 24 -30 15 2 26
17 39 53 31 89 35 85 -98 84 -65 -1 -149 -5 -188 -9z"/>
<path fill="red" d="M6651 989 c-29 -5 -76 -21 -103 -36 -64 -35 -141 -119 -156 -170 -16
-53 -15 -126 2 -166 13 -31 97 -116 204 -206 107 -91 138 -178 89 -252 -67
-101 -216 -102 -370 -2 l-27 18 -53 -53 c-60 -60 -60 -58 43 -94 92 -32 250
-32 332 1 126 49 207 130 229 226 23 102 -16 168 -184 313 -127 111 -151 146
-145 212 11 114 145 175 265 121 47 -22 63 -45 67 -99 3 -33 7 -37 33 -40 l30
-3 17 86 c9 47 15 89 11 94 -8 14 -124 49 -180 54 -27 3 -74 1 -104 -4z"/>
</g>
</svg>

            </div>
        );
    }


export default Compass;