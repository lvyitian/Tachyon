function factory()
{
    var obj = {};
    obj.x = 3;
    return obj
}

a = factory();

a.x = 'foo';

b = factory();

a.y = 3;

typeAssert(a.y, '["and", "int"]');
typeAssert(b.y, '["and", "undef"]');

typeAssert(a.x, '["and", "string"]');
typeAssert(b.x, '["and", "int"]');

