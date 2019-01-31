import { ReportComponent } from "./pages/report/report.component";
import { SkillComponent } from './pages/skill/skill.component';
import { provideRouterInitializer, provideRoutes } from '@angular/router/src/router_module';

const APP_ROUTES = [
    {
        path: 'skills', component: SkillComponent
    },

    {
        path: 'report', component: ReportComponent
    }
];

export const APP_ROUTES_PROVIDER = [
    provideRoutes(APP_ROUTES)
];