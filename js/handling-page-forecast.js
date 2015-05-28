/**
 * Created by User on 28.05.2015.
 */
var foo = function()
{
    document.getElementById('Oven').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Oven');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Telec').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Telec');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Blizneci').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Blizneci');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Rak').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Rak');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Lev').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Lev');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Deva').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Deva');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Vesi').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Vesi');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Skorpion').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Skorpion');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Strelec').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Strelec');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Kozerog').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Kozerog');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Vodoley').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Vodoley');
        document.getElementById("line").style.visibility = "visible";
    };
    document.getElementById('Ribi').onclick = function() {
        document.getElementById('page-forecast-forecast').innerHTML = forecasts('Ribi');
        document.getElementById("line").style.visibility = "visible";
    };
};
window.onload = foo;
console.log('script loaded');

function forecasts (zodiac)
{
    if (zodiac == 'Oven') return '<p><B>Овен</B></p><p>Овнам не стоит сейчас совершать какие-либо действия в спешке. Многие дела смогут разрешиться без вашего непосредственного участия, силами ваших коллег, родных, друзей. Конечно, это не означает, что вы должны бездействовать, однако, берите на себя лишь ту часть работы, которая даётся вам лучше всего. Дипломатичность, вежливость, тактичность сыграют вам на руку, позволив договориться с нужными людьми о важных для вас вещах.</p>';
    else if (zodiac == 'Telec') return '<p><B>Телец</B></p><p>Тельцам предстоит проявить сноровку и смекалку при решении текущих задач. Мобильность, решительность, осведомлённость - главные козыри на протяжении этих суток. Недостаток информации может пагубно сказаться на решении актуальных вопросов. Звёзды советуют вам обращаться за необходимой помощью к друзьям, коллегам, а также к различным интернет-ресурсам. Как говорится - для достижения желаемого все средства хороши.</p>';
    else if (zodiac == 'Blizneci') return '<p><B>Близнецы</B></p><p>В течение этих суток Близнецов ждут в основном позитивные эмоции и впечатления. Если позволяют обстоятельства, возьмите на работе небольшой тайм-аут, и используйте высвободившееся время для занятия любимым хобби или выезда загород - общение с природой пойдёт на пользу вашему самочувствию и здоровью. Возможно, вам придётся потратиться на какую-то дорогостоящую покупку, которую вы уже длительное время откладывали.</p>';
    else if (zodiac == 'Rak') return '<p><B>Рак</B></p><p>Возможно в течение этих суток Раки встанут перед важным выбором, от которого в дальнейшем будет многое зависеть. Прежде чем решиться на рискованный шаг, тщательно продумайте все возможные последствия. Если в общении с руководством или коллегами не получается прийти к компромиссу, отложите на какое-то время обсуждаемый вопрос или пойдите на уступку - вероятнее всего, вы лишь выиграете от проявленной вами мягкости и уступчивости.</p>';
    else if (zodiac == 'Lev') return '<p><B>Лев</B></p><p>Интересы многих Львов могут сегодня пойти вразрез с желаниями и потребностями родных и друзей. Звёзды советуют вам минимизировать эгоистические амбиции, и больше руководствоваться таким понятием, как забота о ближнем. Если родственники попросят вас о некой помощи, которая не составляет для вас особого труда, постарайтесь найти время и возможность для содействия им. Любые спорные вопросы лучше всего решать мирным путём, в противном случае разбирательств и плохого настроения не избежать.</p>';
    else if (zodiac == 'Deva') return '<p><B>Дева</B></p><p>Девам звёзды рекомендуют во всём придерживаться золотой середины. Разумный баланс между работой и отдыхом, личной жизнью и общением с друзьями, родными, творчеством и самообразованием (повышением профессиональной квалификации) и т.д. В общении с любимым человеком не помешает оригинальность, спонтанность. Если вы давно живёте вместе, постарайтесь немного обновить интерьер жилого пространства, а также привнесите некоторые эксперименты в свой быт, интимную жизнь и т.д. Небольшое разнообразие поможет освежить чувства в вашей паре, что, несомненно, положительно скажется на отношениях с избранником(-цей) в целом.</p>';
    else if (zodiac == 'Vesi') return '<p><B>Весы</B></p><p>Весам не помешает уделить больше внимания своему внешнему виду. Возможно, вы давно собирались нанести визит в салон красоты или пройтись по магазинам за обновками - сейчас для этого более чем подходящее время. Изменения в вашем облике помогут вам стать более яркой и заметной личностью. Вечер можно посвятить общению с симпатичным вам человеком - уютная обстановка и разговоры на приватные темы способны значительно вас сблизить и придать вашему общению более серьёзный статус.</p>';
    else if (zodiac == 'Skorpion') return '<p><B>Скорпион</B></p><p>Некоторым Скорпионам предстоят переживания относительно финансовых растрат. Звёзды советуют вам не придавать особого значения тому, чего уже не вернёшь, и главным образом сосредоточиться на гармонии души и тела, что, по сути, гораздо важнее потраченных денег. Тем, кто попался в любовные сети, стоит получше узнать объект своей симпатии, прежде чем делать какие-то серьёзные и решительные шаги. Вполне возможно, вы поймёте, что с этим человеком вам не по пути.</p>';
    else if (zodiac == 'Strelec') return '<p><B>Стрелец</B></p><p>Хороший день для всех, кто открыт для общения и новых знакомств. Сегодня вам удастся весело и интересно провести время в кругу своих друзей и соратников. Кроме того, представится хорошая возможность расширить список полезных контактов. В то же самое время наиболее избирательные и придирчивые Стрельцы могут отсечь от себя лишних людей, без сожаления попрощаться со знакомыми, которые не попадают под те или иные критерии. Звёзды советуют вам немного отвлечься от рутинных хлопот и больше внимания уделить семье, родным и близким людям.</p>';
    else if (zodiac == 'Kozerog') return '<p><B>Козерог</B></p><p>Для многих Козерогов наступил, своего рода, решающий, показательный день. В течение этих суток вы можете встать перед непростым выбором, и ваше решение способно, во многом, оказать влияние на всю вашу дальнейшую жизнь. Также звёзды советуют вам немного поработать над своей внешностью. Особенно это касается представительниц слабого пола. Возможно, стоит посетить парикмахерскую, салон красоты, нанести визит к визажисту. Для поддержания хороших и доверительных отношений с вашим окружением важна дипломатичность, готовность идти на разумные уступки и искать компромиссы.</p>';
    else if (zodiac == 'Vodoley') return '<p><B>Водолей</B></p><p>День подходит для самообразования, совершенствования профессиональных знаний и навыков. Поддерживайте эмоционально тёплые контакты с родными и друзьями, сейчас для вас крайне важно взаимопонимание с близкими людьми и возможность положиться на них в непростой момент времени. Многих Водолеев в течение этих суток может посетить ностальгическое настроение, вызванное воспоминаниями о детстве или сожалением из-за разрыва отношений с некогда дорогим вам человеком.</p>';
    else if (zodiac == 'Ribi') return '<p><B>Рыбы</B></p><p>Рыбам в течение этого дня будет свойственна борьба эмоций и разума. Звёзды советуют вам придерживаться золотой середины и искать во всём разумную границу между чувствами и логикой. Личные представления многих Рыб о правильном и должном, скорее всего, идут вразрез с мнением большинства людей из вашего окружения. Тем не менее, вам не стоит рьяно отстаивать свою точку зрения, а тем более, навязывать её другим людям, если вы не хотите испортить отношения с теми, кто вам близок и дорог.</p>';
}