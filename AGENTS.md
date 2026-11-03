<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Team members, proposals, contacts, news and meeting minutes live in src/data/*.ts; pages render from these lists so content can be edited without touching layout.
- Brand colors are semantic tokens in src/styles.css; never hardcode hex in components. The current official palette governs all interface colors, while the uploaded logo artwork remains unchanged.
- The Atas page retains /noticias to preserve existing links; minutes only show a document link when a real URL is supplied.
- Proposal categories, including DIREX and Cultura, share the dynamic proposal route so adding a category does not require duplicating page layout.

- Keep placeholder fields as individually numbered literal strings, including each team member and proposal; shared content retains its identifier so searching finds the editable source.

- Department pages reuse TeamCarousel and explicit member-ID mappings from team data; department-only members stay separate from the homepage list to prevent unintended inclusion.
