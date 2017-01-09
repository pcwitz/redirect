# timed redirect

Used for ClaimWeb's `goodbye.asp` (found under tools > Claim Indexing Search) to redirect to <https://claimsearch.iso.com/>.

## Development

- for development using browserify
    *  cd to claimweb and cli: `gulp watch --module redirect`
    *  writes to `./modules/<module>/src` folder
- for production build
    *  cli: `gulp --module redirect`
    *  build css and js into `./js` folder